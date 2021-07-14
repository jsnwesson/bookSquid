const bookclubRouter = require('express').Router();
const Reviews = require('../models/reviews');
const axios = require('axios');
const Books = require ('../models/books');
const Users = require('../models/users');


// book endpoints

// helper function for searching google books api with a particular bookId if it doesn't exist in local database and then populating it there

// get book by id (local database lookup)
bookclubRouter.get('/books/:bookId', async (req, res) => {
  let {bookId} = req.params;
  let book = await Books.find({bookId});
  // helper at line 7 would be inovked here if book is empty
  res.send(book[0]);
});

bookclubRouter.get('/books/recommended', async(req, res) => {
  // get every book id that's in someone's favorites list
  // find every user's favorite list and extract distinct ids
  // run query for minimum amount of data needed for carousel display (?)
  // process them into objects with [author(s)], title, id, and thumbnail url
  // return that
});

bookclubRouter.get('/carouselMeta', async(req, res) => {
  console.log('get carousels');
  let {uid} = req.headers;
  console.log('uid: ', uid);
  try {
    let lists = await Users.find({uid}).select('lists -_id');
    if (lists.length === 0) {
      throw Error;
    }
    console.log(lists[0]);
    // need to process inside lists[0] with mongoose methods
    res.send(lists[0]);
  } catch(e) {
    res.status(400, 'not logged in');
  }
});

// search endpoint that queries google books api
bookclubRouter.get('/books/search/:q', async (req, res) => {
  let url = new URL('https://www.googleapis.com/books/v1/volumes');
  let params = new URLSearchParams({
    q: req.params.q,
    printType: 'books',
    maxResults: 20
  });
  url.search = params;
  let googleResults = await axios.get(url.toString());
  // console.log(googleResults.data.items);
  // functionality for processing data needed for db storage will go here

  // returns only data search page needs for each result
  let processed = await googleResults.data.items.map(entry => {
    let {id} = entry;
    let {title, authors, averageRating, ratingsCount, imageLinks} = entry.volumeInfo;
    return {
      id,
      title,
      authors,
      averageRating: averageRating || 0,
      ratingsCount: ratingsCount || 0,
      image: imageLinks ? imageLinks.thumbnail : ''
    };
  });
  // console.log(processed);
  res.send(processed);
});


// review endpoints
bookclubRouter.post('/reviews', async (req, res) => {
  console.log('reviews post');
  let {bookId, body, title, rating} = req.body;
  let {uid} = req.headers;
  let date = new Date().toISOString();
  let review = new Reviews({
    rating,
    uid,
    reviewId: `${uid}::${bookId}`,
    date,
    body,
    title
  });
  try {
    let response = await review.save();
    console.log('success');

    res.sendStatus(201);
  } catch (e) {
    console.log('failure');
    console.log(e.message);
    res.sendStatus(400);
  }
});

bookclubRouter.get('/reviews/:bookId', async (req, res) => {
  console.log('reviews get');
  let {bookId} = req.params;
  // run query for reviews whose reviewIds ends in the book array
  let response = await Reviews.find({reviewId : new RegExp(bookId + '$', 'i')});
  let data = response.map(x => ({
    // to do: figure out how to convert uid to name inline
    name: x.uid,
    title: x.title,
    body: x.body,
    rating: x.rating,
    date: x.date.toISOString()
  }));
  res.send(data);
});


// user endpoints

// list data, would probably correspond best with carousel metadata
bookclubRouter.get('user/lists/', async(req, res) => {

});


// profile data of currently logged in user
bookclubRouter.get('user/profile', async(req, res) => {

});

module.exports = bookclubRouter;
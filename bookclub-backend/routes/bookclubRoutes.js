var express = require('express');
var bookclubRouter = express.Router()
const axios = require('axios');

const Reviews = require('../models/reviews');
const Books = require('../models/books');
const Users = require('../models/users');


/////////////////////////////////// book endpoints ///////////////////////////////////////////

// get book by id
bookclubRouter.get('/books/:bookId', async (req, res) => {
  let { bookId } = req.params;
  let book = await Books.find({ bookId });
  res.send(book[0]);
});

bookclubRouter.get('/books/recommended', async (req, res) => {
  // get every book id that's in someone's favorites list
  // find every user's favorite list and extract distinct ids
  // run query for minimum amount of data needed for carousel display (?)
  // process them into objects with [author(s)], title, id, and thumbnail url
  // return that
});

bookclubRouter.get('/carouselMeta', async (req, res) => {
  let { uid } = req.headers;
  try {
    let lists = await Users.find({ uid }).select('lists -_id');
    if (lists.length === 0) {
      throw Error;
    }
    // console.log(lists[0]);
    // need to process inside lists[0] with mongoose methods
    res.send(lists[0]);
  } catch (e) {
    res.status(400);
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
  let mongoResults = await Books.find({ $text: { $search: req.params.q } });
  let processed = googleResults.data.items.map(entry => {
    let { id } = entry;
    let { title, authors, averageRating, imageLinks, description, publishedDate, categories } = entry.volumeInfo;
    return {
      authors,
      reviews: [],
      title,
      totalRating: averageRating || 0,
      description,
      publishedDate,
      thumbnail: imageLinks ? imageLinks.smallThumbnail : '',
      genre: categories ? categories[0] : '',
      bookId: id,
      image: imageLinks ? imageLinks.thumbnail : '',
    };
  });
  res.send(mongoResults.concat(processed));
});


/////////////////////////////////// review endpoints ////////////////////////////////////

// post book review
bookclubRouter.post('/reviews', async (req, res) => {
  let { bookId, body, title, rating } = req.body;
  let { uid } = req.headers;
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
    let reviewPromise = review.save();
    let bookPromise = Books.findOneAndUpdate({ "bookId": bookId }, { $push: { reviews: review.reviewId } });
    let userPromise = Users.findOneAndUpdate({ "uid": uid }, { $push: { reviews: review.reviewId } });
    Promise.all([reviewPromise, bookPromise, userPromise]);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(400);
  }
});

// get all book reviews
bookclubRouter.get('/reviews/:bookId', async (req, res) => {
  let { bookId } = req.params;
  let reviews = await Reviews.find({ reviewId: { $in: (await Books.find({ bookId }, { reviews: 1, _id: 0 }))[0].reviews } }, { _id: 0 });
  let data = [];
  for await (var review of reviews) {
    let name = await Users.find({ uid: review.uid }, { name: 1, _id: 0 });
    data.push({
      name: name[0].name,
      title: review.title,
      body: review.body,
      rating: review.rating,
      date: review.date.toISOString(),
    });
  };
  res.send({ data });
});

/////////////////////////////////////// user endpoints //////////////////////////////////////////

// create user endpoint
bookclubRouter.post('/user/create', async (req, res) => {
  let { uid, name, email, date } = req.body;
  let newUser = await Users.create({
    joinedDate: date,
    userEmail: email,
    name: name,
    uid: uid,
  });
  res.sendStatus(201);
})

// list data, would probably correspond best with carousel metadata
bookclubRouter.post('/user/list/', async (req, res) => {
  let { listName, bookId } = req.body;
  let { uid } = req.headers;
  const newString = `lists.${listName}`;
  let update = await Users.findOneAndUpdate({ uid }, { $push: { [newString]: bookId } });
  res.sendStatus(201);
});

bookclubRouter.put('/user/list/', async (req, res) => {
  let { listName, bookId } = req.body;
  let { uid } = req.headers;
  const newString = `lists.${listName}`;
  let update = await Users.findOneAndUpdate({ uid }, { $pull: { [newString]: bookId } });
  res.sendStatus(201);
});

// profile data of currently logged in user
bookclubRouter.get('/user/profile', async (req, res) => {
  console.log('user profile get');
  let { uid } = req.headers;
  try {
    let userData = await Users.findOne({uid}, { _id: 0, uid: 0, reviews: 0}).lean();
    for (let list in userData.lists) {
      let bookData = await Books.find({ bookId: { $in: userData.lists[list] } }, { _id: 0, reviews: 0, totalRating: 0 });
        userData.lists[list] = bookData;
    }
    // console.log(userData);
    res.send(userData);
  } catch (e) {
    console.log(e.message);
    res.send(400);
  }

});

module.exports = bookclubRouter;

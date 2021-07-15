var express = require('express');
var bookclubRouter = express.Router()
const axios = require('axios');

const Reviews = require('../models/reviews');
const Books = require('../models/books');
const Users = require('../models/users');

/////////////////////////////////// book endpoints ///////////////////////////////////////////
// get recently reviewed books
bookclubRouter.get('/books/recentlyReviewed', async (req, res) => {
  console.log('get recently reviewed books');
  let {uid} = req.headers;
  // if uid of currently logged in user exists, gets books recently reviewed. otherwise, gets books most recently reviewed by any user
  let queryObj = uid ? {uid} : {}
  try {
    let response = await Reviews.find(queryObj, {_id: 0, reviewId: 1}).sort('-date').lean();
    console.log(response);
    let bookIDs = response.map(x => x.reviewId.split('::')[1]);
    let uniques = [...new Set(bookIDs)];
    let bookData = await Books.find({bookId: {$in: uniques}}, {_id: 0}).lean();
    res.send(bookData);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

// get recommended books
bookclubRouter.get('/books/recommended', async (req, res) => {
  console.log('get recommended books');
  // get every book id that's in someone's favorites list
  // OR get top 5 total rating books. another idea
  try {
    let response = await Users.find({}, {_id: 0}).select('lists.favorites').lean();
    let allFavoriteIds = response.map(x => x.lists.favorites).flat();
    let uniques = [...new Set(allFavoriteIds)];
    // find every user's favorite list and extract distinct ids
    let bookData = await Books.find({bookId: {$in: uniques}}, {_id: 0}).lean();
    // console.log(bookData);
    // return that
    res.send(bookData);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

// get book by id
bookclubRouter.get('/books/:bookId', async (req, res) => {
  let { bookId } = req.params;
  let book = await Books.find({ bookId });
  res.send(book[0]);
});

/////////////// add book to our mongo DB
bookclubRouter.post('/books/add', async (req, res) => {
  const {
    authors,
    reviews,
    title,
    totalRating,
    description,
    publishedDate,
    thumbnail,
    genre,
    bookId,
    image
  } = req.body;

  let createBook = await Books.create({
    authors,
    reviews,
    title,
    totalRating,
    description,
    publishedDate,
    thumbnail,
    genre,
    bookId,
    image
  });
  res.sendStatus(201);
});

/////////////// get all book data from all lists of a specific user
bookclubRouter.get('/carouselMeta', async (req, res) => {
  console.log('carouselMeta');
  let { uid } = req.headers;
  try {
    let listData = await Users.find({ uid }, { lists: 1, _id: 0 }).lean();
    const lists = listData[0].lists;
    let results = {}
    for (var list in lists) {
      let bookData = await Books.find({ bookId: { $in: lists[list] } }, { _id: 0 })
      results[list] = bookData
    }
    res.send(results).status(200);
  } catch (e) {
    res.status(400);
  }
});

//////////////////// get search results from our book collection by authors and titles, and googles api for 20 relevant books
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

//////////////// post book review to a specific book
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

/////////////// get all book reviews for specific book
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

/////////////// create a user in our DB
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

/////////////// add a specific book to a specific users specific list
bookclubRouter.post('/user/list/', async (req, res) => {
  let { listName, bookId } = req.body;
  let { uid } = req.headers;
  const newString = `lists.${listName}`;
  let update = await Users.findOneAndUpdate({ uid }, { $push: { [newString]: bookId } });
  res.sendStatus(201);
});

/////////////// remove a specific book from a specific users specific list
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

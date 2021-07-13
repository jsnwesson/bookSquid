const bookclubRouter = require('express').Router();
//const ReadBook = require('../models/readBooks');

/// this express action is not going to be used and is for a collection that will be deleted
// bookclubRouter.get('/get-read-book', async (req, res) => {
//   const auth = req.currentUser;
//   if (auth) {
//     const books = await ReadBook.find({});
//     return res.json(books.map((book) => book.toJSON()));
//   }
//   return res.status(403).send('Not authorized');
// });

/// this express action is not going to be used and is for a collection that will be deleted
// bookclubRouter.post('/add-read-book', (req, res) => {
//   const auth = req.currentUser;
//   if (auth) {
//     const book = new ReadBook(req.body);
//     const savedBook = book.save();
//     return res.status(201).json(savedBook);
//   }
//   return res.status(403).send('Not authorized')
// });

// search endpoint that queries google books api
// will require both a query string and query type in its parameters
bookclubRouter.post('/search', async (req, res) => {
  // req.params should look like {query: 'asdf", type: 'author || title || genre'}
  let url = new URL('https://www.googleapis.com/books/v1/volumes');
  let params = ((type) => new URLSearchParams({
    q: req.params.query,

  }))(req.params.type);
  url.search = params;
  const results = await fetch('https://www.googleapis.com/books/v1/volumes', )
});
module.exports = bookclubRouter;
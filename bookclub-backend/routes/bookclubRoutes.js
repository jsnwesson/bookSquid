const bookclubRouter = require('express').Router();
const ReadBook = require('../models/readBooks');

/// this express action is not going to be used and is for a collection that will be deleted
bookclubRouter.get('/get-read-book', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const books = await ReadBook.find({});
    return res.json(books.map((book) => book.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

/// this express action is not going to be used and is for a collection that will be deleted
bookclubRouter.post('/add-read-book', (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const book = new ReadBook(req.body);
    const savedBook = book.save();
    return res.status(201).json(savedBook);
  }
  return res.status(403).send('Not authorized')
});

module.exports = bookclubRouter;
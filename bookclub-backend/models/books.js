const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  image: String,
  title: { type: String, unique: true },
  authors: [String],
  reviews: [String],
  totalRating: Number,
  description: String,
  publishedDate: String,
  thumbnail: String,
  genre: String,
  bookId: { type: String, unique: true },
})

booksSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const booksModel = mongoose.model('Books', booksSchema)
module.exports = booksModel;

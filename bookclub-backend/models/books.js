const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  gid: { type: String, unique: true }
  img: String,
  title: String,
  authors: [String],
  totalRating: Number,
  reviews: [String ],
})

booksSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Books', booksSchema)

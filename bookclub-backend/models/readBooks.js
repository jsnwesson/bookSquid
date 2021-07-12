const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  /**
   *
   * This Schema/Model needs to be deleted soon. ********** <=========/////
   *  just here for reference
  */
})

booksSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('ReadBooks', booksSchema)
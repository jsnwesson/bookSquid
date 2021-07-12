const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  UID: String,
  userEmail: String,
  lists: {
    readBooks: [String],
    favorites: [String],
  },
  reviews: [String],
  name: String,
  joinedDate: Date
})

usersSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Books', usersSchema)

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userEmail: String,
  lists: {
    alreadyRead: [String],
    favorites: [String],
    currentlyReading: [String],
    goingToRead: [String],
  },
  reviews: [String],
  name: String,
  joinedDate: Date
  uid: String,
})

usersSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Books', usersSchema)

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
  joinedDate: Date,
  uid: String,
})

usersSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const usersModel = mongoose.model('Users', usersSchema)
module.exports = usersModel;

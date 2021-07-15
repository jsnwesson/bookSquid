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
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

<<<<<<< HEAD
module.exports = mongoose.model('Users', usersSchema)
=======
const usersModel = mongoose.model('Users', usersSchema)
module.exports = usersModel;
>>>>>>> 07ac08e52a57b223e7e40305c5c25fc748a2eb50

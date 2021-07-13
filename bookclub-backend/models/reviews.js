const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  message: String,
  rating: Number,
  uid: String,
  reviewId: { type: String, unique: true },
  date: Date,
})

reviewsSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Reviews', reviewsSchema)
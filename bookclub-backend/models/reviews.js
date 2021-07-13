const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  reviewId: { type: String, unique: true },
  message: String,
  rating: Number,
  uid: String,
})

reviewsSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Reviews', reviewsSchema)
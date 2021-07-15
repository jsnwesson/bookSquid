const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  rating: Number,
  uid: String,
  reviewId: { type: String, unique: true },
  date: Date,
  body: String,
  title: String,
})

reviewsSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const reviewsModel = mongoose.model('Reviews', reviewsSchema);
module.exports = reviewsModel;

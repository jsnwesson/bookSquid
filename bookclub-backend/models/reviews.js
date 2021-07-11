const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  review_id: String,
  message: String,
  rating: Number,
})

reviewsSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Reviews', reviewsSchema)
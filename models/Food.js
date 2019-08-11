const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  edible: {
    type: Number,
    required: true
  },
  edibleDetails: {
    type: String,
    required: true
  },
  foodDetails: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: null
  },
  saves: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('food', FoodSchema);

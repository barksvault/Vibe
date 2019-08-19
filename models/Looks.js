const mongoose = require("mongoose");

const lookSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  season: String,
  tags: {
    type: [String],
    required: true
  },

  favorites: {
    type: String,
    required: true
  },
  color: String,
  weatherCondition: Number,
  temp: Number
});

module.exports = mongoose.model("Looks", lookSchema);

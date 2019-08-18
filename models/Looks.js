const mongoose = require("mongoose");

const lookSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
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
  season: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    required: true
  },
  favorites: {
    type: String,
    required: true
  },
  color: String,
  code: Number,
  temp: Number
});

module.exports = mongoose.model("Looks", lookSchema);

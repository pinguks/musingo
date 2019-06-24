const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: String,
  imgUrl: String,
  src: String
});

module.exports = SongSchema;

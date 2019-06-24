const mongoose = require("mongoose");
const songSchema = require("./Song");

const PlaylistSchema = new mongoose.Schema({
  title: String,
  songs: [songSchema],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("playlist", PlaylistSchema);

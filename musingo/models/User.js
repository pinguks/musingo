const mongoose = require("mongoose");
const songSchema = require("./Song");

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  recentlyPlayed: [songSchema]
});

UserSchema.virtual("playlists", {
  ref: "playlist",
  localField: "_id",
  foreignField: "owner"
});

module.exports = mongoose.model("user", UserSchema);

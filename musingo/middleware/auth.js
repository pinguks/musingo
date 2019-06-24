const User = require("../models/User");

module.exports = async (req, res, next) => {
  const googleId = req.headers["x-google-id"];

  if (googleId) {
    const user = await User.findOne({ googleId });

    if (!user) return next();

    await user.populate({ path: "playlists" }).execPopulate();

    req.user = user;
    req.playlists = user.playlists;
    req.recentlyPlayed = user.recentlyPlayed;
  }

  next();
};

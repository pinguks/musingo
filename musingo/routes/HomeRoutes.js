const User = require("../models/User");

module.exports = app => {
  app.post("/api", async (req, res) => {
    if (req.user) {
      return res.json({ googleId: req.user.googleId, name: req.user.name });
    }

    const user = new User(req.body);

    await user.save();

    res.json({ googleId: user.googleId, name: user.name });
  });

  app.get("/api/home", (req, res) => {
    const { recentlyPlayed, playlists } = req;

    res.json({ recentlyPlayed, playlists });
  });
};

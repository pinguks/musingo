const Playlist = require("../models/Playlist");

module.exports = app => {
  app.post("/api/playlist/new", async (req, res) => {
    const { title } = req.body;

    const playlist = new Playlist({
      title,
      owner: req.user._id
    });

    await playlist.save();

    res.json(playlist);
  });

  app.post("/api/playlist/:id", async (req, res) => {
    const { title, thumbnail, videoId } = req.body;

    const playlist = await Playlist.findById(req.params.id);

    playlist.songs.push({ title, imgUrl: thumbnail, src: videoId });

    await playlist.save();

    console.log(playlist);

    res.json(playlist);
  });
};

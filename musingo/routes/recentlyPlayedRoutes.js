module.exports = app => {
  app.post("/api/recently", async (req, res) => {
    const { title, imgUrl, src } = req.body;

    let recentlyPlayed = req.recentlyPlayed;

    if (recentlyPlayed.length === 5) {
      recentlyPlayed.pop();
    }

    recentlyPlayed.unshift({ title, imgUrl, src });

    await req.user.save();

    res.json(recentlyPlayed);
  });
};

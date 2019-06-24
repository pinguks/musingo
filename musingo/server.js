const path = require("path");
const express = require("express");
const app = express();

require("./db/database")();

app.use(express.json());

const authMiddleWare = require("./middleware/auth");

app.use(authMiddleWare);

require("./routes/HomeRoutes")(app);
require("./routes/playlistRoutes")(app);
require("./routes/recentlyPlayedRoutes")(app);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);

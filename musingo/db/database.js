const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      process.env.MONGODB,
      { useNewUrlParser: true }
    )
    .then(() =>
      console.log("[]  ------------ MongoDB Connected ----------- []")
    )
    .catch(error => console.log(error));
};

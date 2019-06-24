const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@musingo-niyw4.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() =>
      console.log("[]  ------------ MongoDB Connected ----------- []")
    )
    .catch(error => console.log(error));
};

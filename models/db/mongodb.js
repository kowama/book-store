const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb://localhost:27017/booksRepo",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    }
  }
);

module.exports = mongoose;

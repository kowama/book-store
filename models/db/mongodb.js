const mongoose = require("mongoose");
const connection = mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    }
  }
);

module.exports = mongoose;

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  cover: { type: String },
  category: { type: String, required: true, trim: true },
  editor: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  publishedAt: { type: Date, required: true },
  stock: {
    quantity: { type: Number, required: true },
    sold: { type: Number, required: true, default: 0 }
  },
  price: { type: Number, required: true }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book
};

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  owner: { type: String },
  content: [
    {
      item: {
        book: mongoose.SchemaTypes.Book,
        quantity: Number
      }
    }
  ],
  cost: {
    type: Number
  }
});

cartSchema.methods.addItems = function(newItem) {
  const cart = this;

  cart.content = [...cart.content, newItem];
};

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

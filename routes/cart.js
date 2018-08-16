const router = require("express").Router();
const { Book } = require("./../models/book/Book");

/* GET home page. */
router.get("/", (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  res.render("cart", {
    title: "cart",
    cart: req.session.cart
  });
});
router.get("/add/:itemID", (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  Book.findById(req.params.itemID)
    .then(book => {
      if (!book) {
        ///flash
        return res.redirect("/store/books");
      }
      let newItem = {
        book,
        quantity: 1
      };
      req.session.cart = [...req.session.cart, newItem];
      res.redirect("/store/book/" + req.params.itemID);
    })
    .catch(err => {
      console.log(err);
      res.redirect("/store/book/" + req.params.itemID);
    });
});
module.exports = router;

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Home",
    cart: req.session.cart
  });
});

module.exports = router;

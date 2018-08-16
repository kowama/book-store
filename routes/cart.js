const router = require("express").Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("cart", { title: "cart" });
});
router.get("/add", (req, res, next) => {
  res.render("book", {
    title: "store/book"
  });
});
module.exports = router;

const router = require("express").Router();
const { Book } = require("./../../models/book/Book");

router.get("/", (req, res, next) => {
  res.render("admin/dashboard", {
    title: "Admin/dashboard",
    admin: true
  });
});

router.get("/books", (req, res, next) => {
  Book.find({}).then(books => {
    res.render("admin/books", {
      title: "Admin/books",
      admin: true,
      books
    });
  });
});

module.exports = router;

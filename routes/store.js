const router = require("express").Router();
const { Book } = require("./../models/book/Book");
/* GET home page. */
router.get("/", (req, res, next) => {
  Book.find({}).then(books => {
    if (!books) {
      //flash
      return res.render("store", {
        title: "store/book"
      });
    }
    res.render("store", {
      title: "store",
      books: books.reverse()
    });
  });
});
router.get("/book/:bookID", (req, res, next) => {
  Book.findById(req.params.bookID)
    .then(book => {
      if (!book) {
        return Promise.reject();
      }
      res.render("book", {
        title: "Store/book",
        book
      });
    })
    .catch(err => {
      //flash
      res.redirect("/books");
    });
});
module.exports = router;

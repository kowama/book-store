const router = require("express").Router();
const { Book } = require("./../../models/book/Book");

router.post("/add", (req, res, next) => {
  new Book({
    title: req.body.bookTitle,
    author: req.body.bookAuthor,
    cover: req.body.bookCover,
    category: req.body.bookCategory,
    editor: req.body.bookEditor,
    description: req.body.bookDescription,
    publishedAt: req.body.bookPublishedAt,
    "stock.quantity": parseInt(req.body.bookQuantity),
    price: parseFloat(req.body.bookPrice)
  })
    .save()
    .then(book => {
      //req.flash
      res.redirect("/admin/books");
    })
    .catch(err => {
      //req.flash
      console.log(err);
      res.redirect("/admin/books");
    });
});

router.post("/edit/:bookID", (req, res, next) => {
  const bookID = req.params.bookID;
  Book.findByIdAndUpdate(bookID)
    .then(book => {
      if (!book) {
        //req.flash
        return res.redirect("/admin/books");
      }
      book
        .set({
          title: req.body.editTitle,
          author: req.body.editAuthor,
          cover: req.body.editCover || book.cover,
          category: req.body.editCategory,
          editor: req.body.editEditor,
          description: req.body.editDescription,
          publishedAt: req.body.editPublishedAt,
          "stock.quantity": parseInt(req.body.editQuantity),
          price: parseFloat(req.body.editPrice)
        })
        .save();
      //flah
      res.redirect("/admin/books");
    })
    .catch(err => {
      if (err) {
        console.log(err);
        //req.flash
        return res.redirect("/admin/books");
      }
    });
});

router.get("/delete=:bookID", (req, res, next) => {
  const bookID = req.params.bookID;
  Book.findByIdAndRemove(bookID).then(book => {
    if (!book) {
      //req.flash
      return res.redirect("/admin/books");
    }
    //req.flash
    res.redirect("/admin/books");
  });
});
module.exports = router;

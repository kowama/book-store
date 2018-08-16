const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const storeRouter = require("./routes/store");
const cartRouter = require("./routes/cart");
const adminRouter = require("./routes/admin/index");
const booksRouter = require("./routes/admin/books");

const mongodb = require("./models/db/mongodb");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials("views/partials");
hbs.registerHelper("addOne", function(index) {
  return index + 1;
});
hbs.registerHelper("isActive", function(string1, string2) {
  if (string1 == string2) {
    return "active";
  } else {
    return "";
  }
});
hbs.registerHelper("formatDate", function(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/store", storeRouter);
app.use("/cart", cartRouter);
app.use("/admin", adminRouter);
app.use("/admin/books", booksRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

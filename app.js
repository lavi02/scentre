var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var faq_api = require("./routes/api/faq/faq");
var qna_api = require("./routes/api/faq/qna");
var review_api = require("./routes/api/reviews/review");
var board_api = require("./routes/api/services/board");
var order_api = require("./routes/api/services/order");
var servey_api = require("./routes/api/services/servey");
var user_api = require("./routes/api/user/status");
var brand_api = require("./routes/api/services/brand");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', faq_api);
app.use('/', qna_api);
app.use('/', review_api);
app.use('/', board_api);
app.use('/', order_api);
app.use('/', servey_api);
app.use('/', user_api);
app.use('/api/v1/brand', brand_api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

module.exports = app;

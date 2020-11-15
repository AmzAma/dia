const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const app = express();
const usersRouter = require('./router/users');
const productRouter = require('./router/product');
let conf = {
  port: 8808,
  host: 'localhost'
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.redirect('/html/404.html');
})

app.listen(conf.port, conf.host, () => {
  console.log(`server is running on http://${conf.host}:${conf.port}`);
})  
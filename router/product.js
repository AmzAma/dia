
const express = require('express');
const conn = require('../catalog/conn');
const router = express.Router();
router.route('/getProducts')
  .get((req, res, next) => {
    let sql = 'select*from product';
    conn.query(sql, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
router.route('/getItem')
  .get((req, res, next) => {
    let sql = `select*from product where id=${req.query.id}`;
    conn.query(sql, (req, res, next) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
router.route('/getItem')
  .get((req, res, next) => {
    console.log(req.query)
  });
module.exports = router;
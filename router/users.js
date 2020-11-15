const express = require('express');
const conn = require('../catalog/conn');
const router = express.Router();
const crypto = require('crypto');

// router.route('/')
//   .get((req, res, next) => {
//     console.log(req.query);
//     res.json({ 'method': 'get' });
//   })
//   .post((req, res, next) => {
//     console.log(req.body);
//     res.json({ 'method': 'post' });
//   });
router.route('/reg')
  .post((req, res, next) => {
    let md5 = crypto.createHash('md5');
    let passResult = md5.update(req.body.password).digest('hex');
    let sql = `insert into users(user_name, user_password, user_email, user_phone, user_address )
    values('${req.body.username}','${passResult}','${req.body.email}','${req.body.phone}','${req.body.address}')`;

    conn.query(sql, (err, result) => {
      if (err) console.log(err);
      if (result.insertId) {
        res.cookie('username', req.body.username);
        res.cookie('isLogined', true);
        res.json({ msg: "注册成功" });
      }
    });
  })
router.route('/login')
  .post((req, res, next) => {
    console.log(req.cookies);
  });
module.exports = router; 
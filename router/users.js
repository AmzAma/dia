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



//注册页面的后端接口
router.route('/reg')
  .post((req, res, next) => {
    let searchUser = `select * from users where user_phone = '${req.body.user_phone}'`;

    conn.query(searchUser, (err, results) => {
      if (err) console.log(err);
      if (results.length) {
        res.json({ msg: '存在' });
      } else {
        // let md5 = crypto.createHash('md5');
        // let passResult = md5.update(req.body.password).digest('hex');
        let sql = `insert into users(user_password,user_phone) values('${req.body.password}','${req.body.user_phone}')`;
        conn.query(sql, (err, result) => {
          if (err) console.log(err);
          // if (result.length) {
          //   res.json({ msg: '存在' });
          // }
          if (result.insertId) {
            res.cookie('userphone', req.body.user_phone);
            res.cookie('isLogined', true);
            res.json({ msg: "注册成功" });
          }
        });

      }
    })

  })



//登录页面的后端接口
router.route('/login')
  .post((req, res, next) => {
    //console.log(req.cookies);
    // let md5 = crypto.createHash('md5');
    // let passResult = md5.update(req.body.password).digest('hex');


    let searchUser = `select * from users where user_phone = '${req.body.phone}'and user_password = '${req.body.password}'`;
    console.log(searchUser);
    conn.query(searchUser, (err, results) => {
      if (err) console.log(err);
      if (results.length) {
        res.cookie('userphone', req.body.user_phone);
        res.cookie('isLogined', true);
        res.json({ msg: "登录成功", isLogin: true });
      } else {
        res.json({ msg: "用户名或密码错误" });
      }
    })
  });
module.exports = router; 
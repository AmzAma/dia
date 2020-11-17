import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';
$('#zc').on('click', function () {

  $.ajax({
    type: "post",
    url: `${baseUrl}/users/reg`,
    data: {
      user_phone: $('[name=user_phone]').val(),
      password: $('[name=user_password]').val()
    },
    dataType: "json",
    success: function (response) {
      if (response.msg == '存在') {
        alert(response.msg);
      } else {
        location = '../html/login.html'
      }
    }
  })
});
$('#phone').on('input', function () { //手机号验证
  if (!(/^1(3|4|5|7|8)\d{9}$/.test($('#phone').val()))) {
    $('#text').text('未通过');
    $('#text').css("color", "red");
  } else {
    $('#text').text('通过');
    $('#text').css("color", "green");
  }
})

$('#password').on('input', function () { //密码验证
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  // 密码长度要大于6位，由数字和字母组成
  if (!(reg.test($('#password').val()))) {
    $('#text1').text('未通过');
    $('#text1').css("color", "red");
  } else {
    $('#text1').text('通过');
    $('#text1').css("color", "green");
  }
})
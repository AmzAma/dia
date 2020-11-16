import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';
let flag;

$(
  $('#submit').on('click', function () {
    // let password = $.md5($('[name=password]').val());
    $.ajax({
      type: "post",
      url: `${baseUrl}/users/login`,
      data: {
        phone: $('[name=user_phone]').val(),
        password: $('[name=password]').val()
      },
      dataType: "json",
      success: function (res) {
        console.log(res.isLogin);
        if (!res.isLogin) {
          location = `${baseUrl}/html/login.html`;
        } else {
          location = `${baseUrl}/index.html`;
        }
      }
    });
  })
)

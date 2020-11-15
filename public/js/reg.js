import './library/jquery.js';
import './library/jquery.md5.js';
$('#zc').on('click', function () {
  $.ajax({
    type: "method",
    url: "http://localhost:8808/users/reg",
    data: {
      phone: $('[name=user_phone]').val(),
    },
    dataType: "dataType",
    success: function (response) {
      console.log(1);
    }
  })
});
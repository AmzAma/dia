import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';
(function () {
  let temp = '';

  $.ajax({
    type: "get",
    url: `${baseUrl}/product/getCard`,
    dataType: "json",
    success: function (res) {
      let templi = '';
      res.forEach(elm => {
        console.log(elm);
        let src = JSON.parse(elm.picture)[0];
        temp += `
        <div style="width:20%"><i>√</i></div>
        <div style="width:30%">${elm.title}</div>
        <div style="width:12%">${elm.price}元</div>
        <div style="width:12%">数量</div>
        <div style="width:12%">小计</div>
        <div style="width:12%">操作</div>
        `;
        console.log(src);
      });
      $('.item-table').prepend(temp);
    }
  });
})();
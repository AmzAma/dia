import './library/jquery.js';
import { baseUrl } from './library/config.js';

(function () {
  let temp = '';
  let id = location.search.slice(0).split('=')[0];
  $.ajax({
    type: "get",
    url: `${baseUrl}/product/getItem`,
    data: { id: id },
    dataType: "json",
    success: function (res) {
      let templi = '';
      res.forEach(elm => {
        console.log(elm);
        let src = JSON.parse(elm.picture)[0];

        temp += `
        <img src="../img/5140715760aa69c857147650cd40c33a.jpg" alt=""
          style="display: inline-block;width:50px;height:24px; margin-right:5px;margin-top:5px">
        <h2>${elm.title}</h2>
        <p>${elm.details}</p>
        <span style="display: block;color: #ff6700;font-size: 14px;margin-top:14px">小米自营</span>
        <span style="display: inline-block;color: #ff6700;font-size: 18px;margin:12px 0px;">${elm.price}元</span>
        <span
          style="display: inline-block;color: #b0b0b0;font-size: 14px;margin:12px 0px;text-decoration:line-through;">699元</span>
        <div class="line"></div>
        `;
        console.log(src);

      });
      $('.shopping').prepend(temp);
    }
  });
})();
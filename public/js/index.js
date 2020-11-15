import './library/jquery.js';
import './library/jquery.lazyload.min.js';
import './slider.js';
import { baseUrl } from './library/config.js';

(function () {
  let temp = '';
  $.ajax({
    type: "get",
    url: `${baseUrl}/product/getProducts`,
    dataType: "json",
    success: function (res) {
      let templi = '';
      res.forEach(elm => {
        console.log(elm);
        let src = JSON.parse(elm.picture)[0];

        temp += `
        <div style="margin-bottom: 14px;">
        <a href="http://localhost:8808/html/detailsPage.html?id${elm.id}">
         <img src="../${src.src}" style="margin:0 auto;padding-top:20px">
         </a>
        <p style="font-size:15px;">${elm.title}</p>
        <p style="color: rgba(0,0,0,.54);font-size: 9px; line-height: 30px;">${elm.details}</p>
        <span style="color: #ff6700;font-size: 9px;line-height: 20px;">${elm.price}元</span>
        <span style="line-height:30px;text-decoration: line-through;color:#616161;font-size: 9px;">899元</span>
      </div>
      
        `;
        console.log(src);

      });
      $('.box6').prepend(temp);
    }
  });
})();

(function () {
  let temp = '';
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

$('.lazy').lazyload({
  effect: "fadeIn",
  placeholder: '../img/loading.gif'
});

$('.slider').slider({
  speed: 800, // 动画时间
  delay: 3000 // 图ss片停留时间
});




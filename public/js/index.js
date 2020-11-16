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
        <a href="../html/detailsPage.html?id=${elm.id}">
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

$('.lazy').lazyload({
  effect: "fadeIn",
  placeholder: '../img/loading.gif'
});

$('.slider').slider({
  speed: 800, // 动画时间
  delay: 3000 // 图ss片停留时间
});




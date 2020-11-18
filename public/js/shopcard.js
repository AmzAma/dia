import './library/jquery.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';
(function () {
  let shop = cookie.get('shop');
  if (shop) { // 有cookie数据才发请求
    shop = JSON.parse(shop);

    let idList = shop.map(elm => elm.id).join();
    let temp = '';

    $.ajax({
      type: "get",
      url: `${baseUrl}/product/getCard`,
      data: {
        idList: idList
      },
      dataType: "json",
      success: function (res) {
        let templi = '';

        res.forEach(elm => {
          let arr = shop.filter(val => val.id === elm.id);
          let picture = JSON.parse(elm.picture);
          temp += `
        <div style="width:20%;" class="ck"><i>√</i>
        <img src="../${picture[0].src}" alt=""
          style="width: 20%;height:20%;display: inline-block;vertical-align: middle;">
      </div>
      <div style="width:30%">${elm.title}</div>
      <div style="width:12%">${elm.price}元</div>
      <div style="width:12%">
      <input type="number" value="1" min="1" max="99">
      </div>
      <div style="width:12%;color:#ff6700">${elm.price}元</div>
      <div style="width:12%" class="del">
      <a href="javascript:;" style="color:black" >删除</a>
      </div>
        `;
        });
        $('.item-table').prepend(temp);
        $('.ck').on('click', function () {
          $('.ck i').css({ background: '#ff6700' });
        })

        $('.del a').on('click', function () {
          $('.del').parent().remove();

        })

      }
    });
  }

})();
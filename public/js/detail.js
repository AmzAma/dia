import './library/jquery.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';
import './slider2.js';
(function () {
  let temp = '';
  let id = location.search.slice(0).split('=')[1];
  $.ajax({
    type: "get",
    url: `${baseUrl}/product/getItem`,
    data: { id: id },
    dataType: "json",
    success: function (res) {
      console.log(res)
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
        <div class="product-ddress">
        <span class="iconfont icon-icon161603"></span>
        <div>
          <span>北京</span>
          <span>北京市</span>
          <span>海定区</span>
          <span>清河街道</span>
          <a href="#" class="edit" style="color: #ff6700;">修改</a>
        </div>
        <div class="desc"><span style="color: #ff6700;">该地区暂时缺货</span></div>
      </div>
      <div style="font-size: 18px;margin-top:30px">选择颜色</div>
      <div style="width: 292px;height:42px;border:1px solid #ff6700;color: #ff6700;
        text-align: center;line-height: 42px;font-size: 16px;margin:20px 0px">
        黑色</div>

      <div class="product-price">
        <div>
          <span>小米真无线蓝牙耳机Air 2 Pro 黑色</span>
          <span style="float: right;text-decoration: line-through;">699元</span>
          <span style="float: right;margin-right:5px;">649元</span>
          <p style="font-size:24px;color:#ff6700;margin-top:20px">总计：649元</p>
        </div>
      </div>
      
      <div class="btn-line-primary">
        <a href="JavaScript:;" id="p">加入购物车</a>
        <a href="#" style="color:white;font-size: 16px;"><span class="iconfont icon-gouwuche"> 喜欢</span></a>
      </div>
        `;
      });
      $('.shopping').prepend(temp)
        .find('#p').on('click', function () {
          addItem(res[0].id);
          // console.log(res[0].id);
        })

    }
  });
  function addItem (id) {
    let shop = cookie.get('shop'); // 从cookie中获得shop数据

    let product = {
      id: id,
    }
    if (shop) { // 判断是否存有购物车数据
      shop = JSON.parse(shop); // 将取出的cookie数据转成对象
      // 判断cookie中的购物车数据 是否已存在本条数据的id
      shop.push(product);
    } else { // cookie中不存在shop数据
      shop = []; // 设置一个数组
      shop.push(product); // 将当前商品存入数组
    }
    cookie.set('shop', JSON.stringify(shop), 1);
  }
})();

$('.slider').slider({
  speed: 800, // 动画时间
  delay: 3000 // 图ss片停留时间
});
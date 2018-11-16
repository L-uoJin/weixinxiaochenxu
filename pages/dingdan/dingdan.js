// pages/dingdan/dingdan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 0,
    date:"2017-10-28",
    qingkuang:"待付款",
    dfk:[],
    num:0,
    totalprice:0,
    more: [{ 'img': '../image/dingdan/主图2@2x.png', 'describe': "【品牌直采】三的SD-JR02 绞肉机家用电动小型", 'newprice': 149, 'oldprice': 298, 'img2': '../image/dingdan/组2@2x.png', 'img3': '../image/dingdan/组14@2x.png', 'text': '97.1%的好评'}, { 'img': '../image/dingdan/组12拷贝2@2x.png', 'describe': "【品牌直采】三的SD-JR02 绞肉机家用电动小型", 'newprice': 149, 'oldprice': 298, 'img2': '../image/dingdan/组2@2x.png', 'img3': '../image/dingdan/1.png','text':'97.1%的好评'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGoods();
  },
  loadGoods: function () {
    var goods = wx.getStorageSync('goods');
    var dfk=new Array();
    var num=0,totalprice=0;
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      if (good.status=="待付款")
      {
        dfk[i]=goods[i];
        num+=good.number;
        totalprice=good.price;
      }
    }
    this.setData({ dfk: dfk });
    this.setData({ num: num }); 
    this.setData({ totalprice: totalprice });

    console.log(dfk);
   
  },
   selectNav: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    this.setData({ currentId: id });
  },
})
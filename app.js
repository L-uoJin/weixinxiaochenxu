//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var goods = wx.getStorageSync('goods');
    if(!goods)
    {
      goods=this.loadGoods();
    }
  wx.setStorageSync('goods', goods);

  // 展示本地存储能力
  var display_image = wx.getStorageSync('display_image');
  if (!display_image) {
    display_image = this.loaddisplay_image();
  }
  wx.setStorageSync('display_image', display_image);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


  },

  loadGoods:function(){
    var goods=new Array();
    var good=new Object();
    good.id=0;
    good.tu1 ='../image/shopcar/1.png';
    good.describe1="三的SD-JR02绞肉机";
    good.describe2 = "家用电动小型绞馅切菜打碎... 颜色:绿色    规格...";
    good.price=69;
    good.number=1;
    good.status="待付款";
    good.selectd = false;
    goods[0]=good;

    var good1 = new Object();
    good1.id=1;
    good1.tu1 = '../image/shopcar/1.png';
    good1.describe1 = "三的SD-JR02绞肉机";
    good1.describe2 = "家用电动小型绞馅切菜打碎... 颜色:绿色    规格...";
    good1.price = 69;
    good1.number = 1;
    good1.status = "待发货";
    good1.selectd = false;
    goods[1] = good1;
    return goods;
  },
  loaddisplay_image: function () {
    var display_images = new Array();
    var display_image = new Object();
    display_image.id = 0;
    display_image.describe = "三的SD-JR02绞肉机家用电动小型绞馅切菜打碎肉机蒜蓉蒜泥搅拌机";
    display_image.product_price = 69;
    display_image.old_price = 169;
    display_image.product_image = "../image/index/产品图/主图2@2x.png";
    display_image.miaoshu_imag = "../image/xiangqing/细节1@2x.png";
    display_image.image1 = "../image/product/组13@2x.png";
    display_image.image2 = "../image/product/组14@2x.png";
    display_images[0] = display_image;

    var display_image1 = new Object();
    display_image1.id = 1;
    display_image1.describe = "三的SD-JR09D绞肉机家用电动碎肉机不锈钢搅拌机小型绞馅打蒜蓉";
    display_image1.product_price = 99;
    display_image1.old_price = 169;
    display_image1.product_image = "../image/index/产品图/细节15@2x.png";
    display_image1.miaoshu_imag = "../image/xiangqing/细节1@2x.png";
    display_image1.image1 = "../image/product/组13@2x.png";
    display_image1.image2 = "../image/product/组14@2x.png";
    display_images[1] = display_image1;

    var display_image2 = new Object();
    display_image2.id = 2;
    display_image2.describe = "三的SD-JR09D绞肉机家用电动碎肉机不锈钢搅拌机小型绞馅打蒜蓉";
    display_image2.product_price = 99;
    display_image2.old_price = 169;
    display_image2.product_image = "../image/index/产品图/1.png";
    display_image2.miaoshu_imag = "../image/xiangqing/细节1@2x.png";
    display_image2.image1 = "../image/product/组13@2x.png";
    display_image2.image2 = "../image/product/组14@2x.png";
    display_images[2] = display_image2;

    var display_image3 = new Object();
    display_image3.id = 3;
    display_image3.describe = "三的SD-JR10家用绞肉机全自动人容量商用碎肉机碎菜绞馅切丝切片";
    display_image3.product_price = 299;
    display_image3.old_price = 169;
    display_image3.product_image = "../image/index/产品图/3.png";
    display_image3.miaoshu_imag = "../image/xiangqing/细节1@2x.png";
    display_image3.image1 = "../image/product/组13@2x.png";
    display_image3.image2 = "../image/product/组14@2x.png";
    display_images[3] = display_image3;

    var display_image4 = new Object();
    display_image4.id=4;
    display_image4.describe = "三的SD-JR303绞肉机家用电动小型绞馅切菜打碎肉机蒜蓉蒜泥搅拌机";
    display_image4.product_price = 239;
    display_image4.old_price = 169;
    display_image4.product_image = "../image/index/产品图/pro4.png";
    display_image4.miaoshu_imag = "../image/xiangqing/细节1@2x.png";
    display_image4.image1 = "../image/product/组13@2x.png";
    display_image4.image2 = "../image/product/组14@2x.png";
    display_images[4] = display_image4;
    return display_images;
  },
  globalData: {
    userInfo: null,
    path:''
  }
})
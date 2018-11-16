// pages/describe/describe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration: 500,
    id:0,
    shoucang:true,
    img:'../image/xiangqing/组4@2x.png',
    bottom_img: "../image/xiangqing/组5@2x.png",
    bottom_img1:"../image/xiangqing/形状1@2x.png",
    bottom_img2:"../image/xiangqing/03232@2x.png",
    imgUrls: [],
    product_meg:[],
    
    display_image: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    console.log(id);
    this.setData({ id: id });
    this.loaddisplay_image();
    this.setData({ imgUrls: [this.data.product_meg.product_image, this.data.product_meg.product_image]})
  },


  loaddisplay_image: function () {
    var display_image = wx.getStorageSync("display_image", display_image)
    this.setData({ display_image: display_image });
    console.log(display_image);
    this.setData({ product_meg: this.data.display_image[this.data.id] });
    console.log(this.data.product_meg);
  },
  scbutton:function()
  {
    this.setData({ shoucang: !this.data.shoucang})
  },
  shopcarTab:function(e)
  {
    wx.switchTab({
      url: '../shopcar/shopcar',
    })
    console.log(e)
  }




})
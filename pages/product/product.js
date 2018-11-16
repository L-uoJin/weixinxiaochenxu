// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    display_image: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loaddisplay_image();
  },
  loaddisplay_image: function () {
    var display_image = wx.getStorageSync("display_image", display_image)
    this.setData({ display_image: display_image });
    console.log(display_image);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  switchNav: function(e){
    var id=e.currentTarget.id;
    this.setData({ currentTab:id});
  },
  loadproduct:function(e)
  {
    var id=e.currentTarget.id;
    wx:wx.navigateTo({
      url: '../describe/describe?id='+id
    })
  }
})
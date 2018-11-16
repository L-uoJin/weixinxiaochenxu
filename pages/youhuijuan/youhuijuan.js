// pages/youhuijuan/youhuijuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId:0,
    image1:'../image/other/组12@2x.png',
    youhuijuan:[{'price1':399,date:"2017:10:01-2017:12:31",'price2':33},
      { 'price1': 299, date: "2017:10:01-2017:12:31", 'price2': 20 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  selectNav:function(e){
      var id = e.currentTarget.id;
      console.log(id);
      this.setData({ currentId: id });
    }

})
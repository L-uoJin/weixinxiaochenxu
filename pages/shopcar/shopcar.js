// pages/shopchar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids:0,
    selectdALL:false,
    image1: "../image/shopcar/形状6@2x.png",
    image2: "../image/shopcar/椭圆2@2x.png",
    image3: "../image/shopcar/组4@2x.png",
    
    goods:[],
    totalprice:0,
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGoods();
  },
loadGoods:function(){
  var goods=wx.getStorageSync('goods');
  this.setData({goods:goods});
  var totalprice=0;
  var num=0,i;
  for(i=0;i<goods.length;i++)
  {
    var good=goods[i];
    totalprice+=good.price;
    num+=good.number;
  } 
  console.log(totalprice);
  console.log(goods);
  if (this.data.selectdALL==true)this.setData({totalprice:totalprice,num:num});
},
checkall:function(){
  var goods = wx.getStorageSync('goods');
  var i ;
  for (i=0; i < goods.length; i++)
   { 
    if (goods[i].selectd == true) { var len1 = i;continue;}
    else {
      var len1 = i;
      break;
    }
    }
  
    var result = goods[len1].selectd==true?false:true;
    
  console.log(result);
  for (var i = 0; i < goods.length;i++)
  {
    goods[i].selectd=result;
  }
   wx.setStorageSync('goods',goods);
   this.setData({goods:goods});
  if(result==false)
  {
    this.setData({totalprice:0});
    this.setData({num:0});
    this.setData({ selectdALL:result});
  }
  else{
    this.setData({ selectdALL: true });
    this.loadGoods();
   
  }
  
},
  checkboxChange: function (e) {
    var totalprice1 = this.data.totalprice;
    var num1=this.data.num;
    var goods = wx.getStorageSync('goods');
     var ids = e.currentTarget.id;
     if (goods.length == 0) this.setData({selectdALL:false});
     console.log(goods.length ); 
     goods[ids].selectd = !goods[ids].selectd;
     console.log(goods[ids].price)
     if (goods[ids].selectd) {
       totalprice1 += goods[ids].price ;
     num1 +=  goods[ids].number;}
     else{
       totalprice1 -= goods[ids].price;
       num1 -= goods[ids].number;
     }
     wx.setStorageSync('goods', goods);
     if (totalprice1<0){
       totalprice1=0;
       num1=0;
     }
     this.setData({totalprice:totalprice1,num:num1})
     this.setData({ goods: goods });

     
  }
})

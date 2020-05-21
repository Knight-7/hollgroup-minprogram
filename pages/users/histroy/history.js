// pages/users/histroy/history.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 订单数组
    orders:[],
    loadModal: false,
  },
  onLoad: function() {
    this.setData({
      loadModal: true,
    })
    this.getHistoryDeal();
  },
  getHistoryDeal: function() {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/order/getHistoryOrder',
      data: {
        'userId': app.globalData.userOpenId
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res)=> {
        that.setData({
          orders: res.data,
          loadModal: false
        })
      },
      fail: function() {
        console.log("获取数据失败");
      }
    })
  },
  // 页面跳转到发布的订单页面
  jump:function(e){
    // 拿到点击的参数
    let id=e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset);
    console.log('我传入的data-id+',id);
    // 把对象转为string
    let idstr=JSON.stringify(id);
    wx.navigateTo({
      url:'/pages/users/histroy/detail/detail?jsonStr='+idstr,
    })
  },
})
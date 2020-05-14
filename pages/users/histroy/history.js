// pages/users/histroy/history.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 订单数组
    orders:[
      {
        time:"04-16",
        things:[{
          id:0,                 //订单号
          thing:"中午订餐-南苑", //订单内容
          istake:true,          //是否是接到的单子
        },{
          id:1,
          thing:"傍晚订餐-南苑",
          istake:true,
        },{
          id:2,
          thing:"悬赏问答",
          istake:false,
        }]
      },
      {
        time:"04-15",
        things:[{
          id:0,
          thing:"中午订餐-南苑",
          istake:true,
        }]
      }
    ]
  },
  onLoad: function() {
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
        that.setData({orders: res.data})
      },
      fail: function() {
        console.log("获取数据失败");
      }
    })
  },
  // 页面跳转到发布的订单页面
  jump:function(e){
    // 拿到点击的参数
    let id=e.currentTarget.dataset.orderId;
    console.log('我传入的data-id+',id);
    // 把对象转为string
    let idstr=JSON.stringify(10002);
    wx.navigateTo({
      url:'/pages/users/histroy/detail/detail?jsonStr='+idstr,
    })
  },
})
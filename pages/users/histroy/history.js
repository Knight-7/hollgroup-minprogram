// pages/users/histroy/history.js
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
          isout:true,           //是否为支出
          money:6,              //金额大小
        },{
          id:1,
          thing:"傍晚订餐-南苑",
          isout:true,
          money:9,
        },{
          id:2,
          thing:"悬赏问答",
          isout:false,
          money:2,
        }]
      },
      {
        time:"04-15",
        things:[{
          id:0,
          thing:"中午订餐-南苑",
          isout:true,
          money:12,
        }]
      }
    ]
  },
})
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
          istake:true,          //是否收藏
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
})
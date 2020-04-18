// pages/Tools/Tools.js
Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    //导航栏标题
    NavGroup:[
      {
        Name:"订餐发单"
      },
      {
        Name:"带饭接单"
      },
      {
        Name:"悬赏问答"
      },
      {
        Name:"二手交易"
      }
    ],
    //带饭订单瀑布流数组
    SendOrder:[
      {
        id:'0',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {id:'4',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      
             },
    ],
    //带饭订单瀑布流数组
    BringOrder:[
      {
        id:'0',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {id:'4',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      
             },
    ],
    //悬赏问答瀑布流数组
    QandAOrder:[
      {
        id:'0',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {id:'4',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      
             },
    ],
    //二手交易瀑布流数组
    MarketOrder:[
      {
        id:'0',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'4',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'5',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'6',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      }
    ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  // 页面跳转
  jump:function(e){
    var that=this
    // 拿到点击的index下标
    var index=e.currentTarget.dataset.
    index
    var tabcur=e.currentTarget.dataset.TabCur
    // 把对象转为string
    var queryBean=JSON.stringify(that.data.NavGroup[index])
    wx.navigateTo({
      url:'/pages/task/detail/detail?queryBean='+queryBean,
    })
  }
})
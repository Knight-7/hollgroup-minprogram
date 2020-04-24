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
    //接单送饭订单瀑布流数组-type在页面跳转时标志是属于哪个内容
    SendOrder:[
      {
        id:'0',
        type:'SendOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        type:'SendOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        type:'SendOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'3',
        type:'SendOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
    ],
    //带饭发单瀑布流数组
    BringOrder:[
      {
        id:'0',
        type:'BringOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        type:'BringOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        type:'BringOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'3',
        type:'BringOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
    ],
    //悬赏问答瀑布流数组
    QandAOrder:[
      {
        id:'0',
        type:'QandAOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        type:'QandAOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        type:'QandAOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'3',
        type:'QandAOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
    ],
    //二手交易瀑布流数组
    MarketOrder:[
      {
        id:'0',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'1',
        type:'MarketOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'2',
        type:'MarketOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg"
      },
      {
        id:'3',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'4',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg"
      },
      {
        id:'5',
        type:'MarketOrder',
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
    // 拿到点击的参数
    let item=e.currentTarget.dataset.item;
    let id=e.currentTarget.dataset.id;
    console.log('我传入的data-id+',id,'我传入的data-item',item);
    // 把对象转为string
    let idstr=JSON.stringify(id);
    let itemstr=JSON.stringify(item);
    wx.navigateTo({
      url:'/pages/task/detail/detail?jsonStr='+idstr+"&strr="+itemstr,
    })
  }
})
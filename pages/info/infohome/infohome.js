

// pages/info/info.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    //导航栏标题
    NavGroup:[
      {
        Name:"发布中的订单"
      },
      {
        Name:"接受中的订单"
      }
    ],
    /*
     *  订单类型：
        1 互助答疑
        2 跑腿送餐
        3 找人带饭
        4 闲置交易
     */
    //我发布的
    Public:[
      {
        id:0,//编号
        title:"求带南苑鸡排饭",//标题
        words:"请在12:20将两份南苑鸡排饭送到图书馆二……",//内容
        type: 2,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:1,//编号
        title:"高数A1课后题",//标题
        words:"求大佬帮忙解答高数题，事后必有",//内容
        type: 1,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      }],
    //我接收的订单
    Access:[
      {
        id:0,//编号
        title:"北苑酸菜鱼",//标题
        words:"北苑酸菜鱼2份，要辣要大份，送到北8……",//内容
        type: 2,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:1,//编号
        title:"大物A1课后题",//标题
        words:"物理第三章课后题，要过程，救救孩子……",//内容
        type: 1,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:2,//编号
        title:"北苑酸菜鱼",//标题
        words:"北苑酸菜鱼2份，要辣要大份，送到北8……",//内容
        type: 2,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:3,//编号
        title:"大物A1课后题",//标题
        words:"物理第三章课后题，要过程，救救孩子……",//内容
        type: 1,
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      
    ],
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  // 页面跳转到发布的订单页面
  jumpPub:function(e){
    // 拿到点击的参数
    let item=e.currentTarget.dataset.item;
    let id=e.currentTarget.dataset.id;
    console.log('我传入的data-id+',id,'我传入的data-item',item);
    // 把对象转为string
    let idstr=JSON.stringify(id);
    let itemstr=JSON.stringify(item);
    wx.navigateTo({
      url:'/pages/info/detailPub/detailPub?jsonStr='+idstr+"&strr="+itemstr,
    })
  },
  // 页面跳转到发布的订单页面
  jumpAce:function(e){
    // 拿到点击的参数
    let item=e.currentTarget.dataset.item;
    let id=e.currentTarget.dataset.id;
    console.log('我传入的data-id+',id,'我传入的data-item',item);
    // 把对象转为string
    let idstr=JSON.stringify(id);
    let itemstr=JSON.stringify(item);
    wx.navigateTo({
      url:'/pages/info/detailAce/detailAce?jsonStr='+idstr+"&strr="+itemstr,
    })
  }
})


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
        Name:"浏览历史"
      },
      {
        Name:"我的收藏"
      }
    ],
    //浏览历史
    histroys:[
      {
        id:0,//编号
        title:"求带南苑鸡排饭",//标题
        words:"请在12:20将两份南苑鸡排饭送到图书馆二……",//内容
        type: "跑腿接单",
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:1,//编号
        title:"高数A1课后题",//标题
        words:"求大佬帮忙解答高数题，事后必有",//内容
        type: "悬赏解答",
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      }],
      //我的收藏
    favorite:[
      {
        id:0,//编号
        title:"北苑酸菜鱼",//标题
        words:"北苑酸菜鱼2份，要辣要大份，送到北8……",//内容
        type: "跑腿接单",
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:1,//编号
        title:"大物A1课后题",//标题
        words:"物理第三章课后题，要过程，救救孩子……",//内容
        type: "悬赏解答",
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:2,//编号
        title:"北苑酸菜鱼",//标题
        words:"北苑酸菜鱼2份，要辣要大份，送到北8……",//内容
        type: "跑腿接单",
        url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'//图片地址
      },
      {
        id:3,//编号
        title:"大物A1课后题",//标题
        words:"物理第三章课后题，要过程，救救孩子……",//内容
        type: "悬赏解答",
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
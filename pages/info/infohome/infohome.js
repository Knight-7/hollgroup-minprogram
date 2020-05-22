const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
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
    publishOrder: [],
    //我接收的订单
    acceptOrder: []
  },
  //其中切换选项栏的TABBAR应该要加上刷新函数
  methods:{
    fresh: function() {
      let that = this;
      wx.request({
        url: app.globalData.baseUrl + '/order/getOrderInfo',
        data: {
          'id': app.globalData.userOpenId,
        },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: (res) =>{
          console.log(res.data)
          that.setData({
            publishOrder: res.data.publishOrder,
            acceptOrder: res.data.acceptOrder
          })
        },
        fail: function() {
          console.log("获取失败");
        }
      })
    },
    //页內上端TABBAR页面切换用
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
      //刷新数据函数
      console.log("请在methods的tabSelect函数里加上刷新数据的函数")
    },
    // 页面跳转到发布的订单页面
    jumpPub(e){
      // 拿到点击的参数
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id);
      // 把对象转为string
      let idstr=JSON.stringify(id);
      wx.navigateTo({
        url:'/pages/info/detailPub/detailPub?jsonStr='+idstr,
      })
    },
    // 页面跳转到发布的订单页面
    jumpAce(e){
      // 拿到点击的参数
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id);
      // 把对象转为string
      let idstr=JSON.stringify(id);
      wx.navigateTo({
        url:'/pages/info/detailAce/detailAce?jsonStr='+idstr,
      })
    }
  },
  lifetimes:{
    // 组件生命周期函数，在组件实例进入页面节点树时执行。相当于page的onload
    // 简单来说就是tabbar切换的时候调用它
    attached:function(){
      console.log('Component-1 >> attached');
      console.log("info home页面初始化啦！");
      this.fresh();
    }
  },
  pageLifetimes:{
    // detail返回时会调用的的地方
    show:function(){
      console.log('Component-1 pageLifetimes >> info home  Show');
    },
  }
})
var app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    TabCur: 0,
    scrollLeft:0,
    //导航栏标题
    NavGroup:[
      {
        Name:"订餐发单"
      },
      {
        Name:"悬赏问答"
      },
      {
        Name:"二手交易"
      },
      {
        Name:"其他悬赏"
      }
    ],
    //接单送饭订单瀑布流数组-type在页面跳转时标志是属于哪个内容
    sendOrder: [],
    //悬赏问答瀑布流数组
    questionOrder: [],
    //二手交易瀑布流数组
    marketOrder: [],
    otherOrder: []
  },
  methods:{
    fresh(type) {
      let that = this;
      
      if(type==2){
        wx.request({
          url: app.globalData.baseUrl + '/sale/findAll',
          header: {
            'content-type': 'application/json'
          },
          method: "GET",
          success: (res)=>{
            console.log(res.data)
            that.setData({marketOrder: res.data.marketOrder})
          },
          fail: function() {
            console.log("刷新失败")
          }
        })
      }
      else{
        wx.request({
          url: app.globalData.baseUrl + '/order/freshByType',
          header: {
            'content-type': 'application/json'
          },
          data: {
            'type': type
          },
          method: "GET",
          success: (res)=>{
            console.log(res.data)
            switch (that.data.TabCur) {
              case 0:
                that.setData({sendOrder: res.data.sendOrder});
                break;
              case 1:
                that.setData({questionOrder: res.data.questionOrder});
                break;
              case 3:
                that.setData({otherOrder: res.data.otherOrder});
                break;
              default:
                break;
            }
          },
          fail: function() {
            console.log("刷新失败")
          }
        })
      }
    },
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
      //切换页面时刷新数据
      this.fresh(this.data.TabCur);
    },
    // 页面跳转
    jump(e){
      // 拿到点击的参数
      var orderId=e.currentTarget.dataset.id;
      console.log(e.currentTarget.dataset);
      // 把对象转为JSON
      var idstr=JSON.stringify(orderId);
      wx.navigateTo({
        url:'/pages/task/detail/detail?jsonStr=' + idstr,
      })
    },
    // 页面跳转2
    jump1(e){
      // 拿到点击的参数
      let orderId=e.currentTarget.dataset.id;
      console.log('我传入的data-id+', orderId);
      console.log(e.currentTarget.dataset);
      // 把对象转为JSON
      let idstr=JSON.stringify(orderId);
      wx.navigateTo({
        url:'/pages/task/detailNoPos/detail?jsonStr=' + idstr,
      })
    },
  },
  lifetimes:{
    // 组件生命周期函数，在组件实例进入页面节点树时执行。相当于page的onload
    // 简单来说就是tabbar切换的时候调用它
    attached:function(){
      this.fresh(0);
    }
  },
  pageLifetimes:{
    // detail返回时会调用的的地方
    show:function(){
      console.log('Component-1 pageLifetimes >> Show');
      this.fresh(this.data.TabCur);
    },
  }
})
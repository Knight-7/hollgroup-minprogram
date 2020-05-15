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
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        //用户头像图片地址
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        //用户id
        idname:"测试1测试1测试1测试1",
        //价格
        price:4.0
      },
      {
        id:'1',
        type:'SendOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'2',
        type:'SendOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'3',
        type:'SendOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
    ],
    //带饭发单瀑布流数组
    BringOrder:[
      {
        id:'0',
        type:'BringOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'1',
        type:'BringOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'2',
        type:'BringOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'3',
        type:'BringOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
    ],
    //悬赏问答瀑布流数组
    QandAOrder:[
      {
        id:'0',
        type:'QandAOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771969&di=ad1b3aaf04396f550576f86cf719d2af&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F16%2F20150916122607_Jvk5U.jpeg",
        idname:"测试1测试1测试1测试1",
        price:4.0
      },
      {
        id:'1',
        type:'QandAOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'2',
        type:'QandAOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'3',
        type:'QandAOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
    ],
    //二手交易瀑布流数组
    MarketOrder:[
      {
        id:'0',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'1',
        type:'MarketOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'2',
        type:'MarketOrder',
        title:"午饭跑腿带",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'3',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'4',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1856756895,1265182977&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      },
      {
        id:'5',
        type:'MarketOrder',
        title:"帮带南苑饭",
        url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336182742,3159167308&fm=26&gp=0.jpg",
        idurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588778771968&di=860d6683687393c342ccdf76dd49fd77&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F19%2F20170819172652_JnzmX.thumb.700_0.jpeg",
        idname:"测试2",
        price:5.0
      }
    ]
  },
  methods:{
    fresh() {
      wx.request({
        url: app.globalData.baseUrl + '/order/fresh',
        header: {
          'content-type': 'application/json'
        },
        method: "GET",
        success: (res)=>{
          console.log(res.data)
        },
        fail: function() {
          console.log("刷新失败")
        }
      })
    },
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
      //切换页面时刷新数据
      //this.fresh();
      console.log("请在methods的tabSelect函数里加上刷新数据的函数")
    },
    // 页面跳转
    jump(e){
      // 拿到点击的参数
      let item=e.currentTarget.dataset.item;
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id,'我传入的data-item',item);
      // 把对象转为JSON
      let idstr=JSON.stringify(id);
      let itemstr=JSON.stringify(item);
      wx.navigateTo({
        url:'/pages/task/detail/detail?jsonStr='+idstr+"&strr="+itemstr,
      })
    },
    // 页面跳转2
    jump1(e){
      // 拿到点击的参数
      let item=e.currentTarget.dataset.item;
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id,'我传入的data-item',item);
      // 把对象转为JSON
      let idstr=JSON.stringify(id);
      let itemstr=JSON.stringify(item);
      wx.navigateTo({
        url:'/pages/task/detailNoPos/detail?jsonStr='+idstr+"&strr="+itemstr,
      })
    },
  },
  lifetimes:{
    // 组件生命周期函数，在组件实例进入页面节点树时执行。相当于page的onload
    // 简单来说就是tabbar切换的时候调用它
    attached:function(){
      console.log('Component-1 >> attached');
      console.log("Task页面初始化啦！");
      //this.fresh();
    }
  },
  pageLifetimes:{
    // detail返回时会调用的的地方
    show:function(){
      console.log('Component-1 pageLifetimes >> Show');
      //this.fresh();
    },
  }
})
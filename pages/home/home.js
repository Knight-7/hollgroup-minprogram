Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    // 轮播用列表，存图片URL
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00004-2860.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1800162159,1107491761&fm=26&gp=0.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2014735902,1904707316&fm=26&gp=0.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4010879212,2950603462&fm=26&gp=0.jpg'
    }],
    // 文章卡片列表
    articalList: [{
      id: 0,
      title:"4月疫情新动态 助力开学优惠季",
      words:"商务部近日印发了《关于开展2012年消费促进活动的通知》,部署开展……",
      type: "活动预告",
      tag:"优惠",
      url: 'http://img1.imgtn.bdimg.com/it/u=1149327311,608611268&fm=11&gp=0.jpg'
    },{
      id: 1,
      title:"3月疫情新动态 口罩预约抢先知！",
      words:"为进一步做好新冠肺炎疫情防控工作,缓解市民口罩购买难问题,市疫情防控指挥部决定…….",
      type: "热点新闻",
      tag:"实事",
      url: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2298440275,3620619061&fm=85&app=2&f=JPEG?w=121&h=75&s=1202D2055ACA5166142FCC52030050F8'
    },]
  },
  methods: {
    //点击轮播图进行页面跳转
    jumpswip(e){
      // 拿到点击的参数
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id);
      // 把对象转为string
      let idstr=JSON.stringify(id);
      wx.navigateTo({
        url:'/pages/home/detail/detail?jsonStr='+idstr,
      })
    },
    // 点击文章卡片，进行页面跳转
    jumpart(e){
      // 拿到点击的参数
      let id=e.currentTarget.dataset.id;
      console.log('我传入的data-id+',id);
      // 把对象转为string
      let idstr=JSON.stringify(id);
      wx.navigateTo({
        url:'/pages/home/detail/detail?jsonStr='+idstr,
      })
    },
    // cardSwiper轮播事件
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
  },
  lifetimes:{
    // 组件生命周期函数，在组件实例进入页面节点树时执行。相当于page的onload
    // 简单来说就是tabbar切换的时候调用它
    attached:function(){
      console.log('Component-1 >> attached');
      console.log("home页面初始化啦！");
    }
  },
  pageLifetimes:{
    // detail返回时会调用的的地方
    show:function(){
      console.log('Component-1 pageLifetimes >> home  Show');
    },
  }
})
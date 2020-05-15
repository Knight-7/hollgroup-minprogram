const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    creval:100,//信誉积分
    iconList: [{
      icon: 'edit',
      color: 'red',
      name: '修改资料'
    }]
  },
  methods:{
    // 页面跳转
    jump(e){
      wx.navigateTo({
        url:'/pages/users/changeinfo/changeinfo',
      })
    }
  },
  lifetimes:{
    // 组件生命周期函数，在组件实例进入页面节点树时执行。相当于page的onload
    // 简单来说就是tabbar切换的时候调用它
    attached:function(){
      console.log('Component-1 >> attached');
      console.log("userHome页面初始化啦！");
    }
  },
  pageLifetimes:{
    // changeinfo返回时会调用的的地方
    show:function(){
      console.log('Component-1 pageLifetimes >> user home Show');
    },
  }
})
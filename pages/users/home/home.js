// pages/users/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'edit',
      color: 'red',
      badge: 120,// 条目数量
      name: '我的发单'
    }, {
      icon: 'vipcard',
      color: 'orange',
      badge: 2,//条目数数量
      name: '我的接单'
    }, {
      icon: 'moneybag',
      color: 'yellow',
      badge: 0,//条目数量
      name: '我的钱包',
    }],
  }
})
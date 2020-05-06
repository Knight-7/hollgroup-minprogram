// pages/users/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    creval:100,//信誉积分
    iconList: [{
      icon: 'edit',
      color: 'red',
      name: '修改资料'
    }]
  }
})
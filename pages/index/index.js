//index.js
//获取应用实例
const app = getApp()

Page({
  //初始页定在home页
  data: {   
    PageCur: 'home'
  },
  //页面跳转时用
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  //点击发布按钮跳转发布页面
  ClickPublish:function(){
    wx.navigateTo({
      url:'/pages/Publish/publish/publish',
    })
  },
  //转发、分享页面的信息
  onShareAppMessage() {
    return {
      title: '测试用标题',
      path: '/pages/index/index'
    }
  },
})

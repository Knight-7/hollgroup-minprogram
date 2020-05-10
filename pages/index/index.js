//index.js
//获取应用实例
const app = getApp()

Page({
  //初始页定在home页
  data: {   
    PageCur: 'home',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
      title: '百川卉竹-校园互助平台',
      imageUrl: '/image/share.jpgs',
      path: '/pages/index/index'
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    if(e.detail.userInfo!=null)
    {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      console.log("用户同意授权！")
    }
    else
    {
      console.log("用户取消了授权！")
    }
  }
})

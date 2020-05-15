//app.js
App({
  
  onLaunch: function () {
    /*
    let that = this;
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    */
    wx.getSystemInfo({
      // 自定义上导航栏
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
    // 登录
    wx.login({
      
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        wx.getUserInfo({
          success: (res) => {
            wx.request({
              url: this.globalData.baseUrl + '/user/login',
              data: {
                'code': code,
                'iv': res.iv,
                'encryptedData': res.encryptedData
              },
              header: {
                'content-type': 'application/json'
              },
              success: (res) =>{
                that.globalData.userOpenId = res.data.openid;
                console.log(res)
              },
              fail: function() {
                console.log("登陆失败")
              }
            })
          },
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      },
      fail:function(res){
        //取消授权后给信息
        console.log(res);
        console.log('取消了授权！！');
      }
    })
  },
  globalData: {
    userInfo: null,
    userOpenId: null,
    baseUrl: 'http://localhost:3434'
  }
})
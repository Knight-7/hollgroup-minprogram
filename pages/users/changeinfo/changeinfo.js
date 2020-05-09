// pages/users/changeinfo/changeinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"初始地址",//地址
    tel:"初始手机号",//手机号
  },
  //地址填写
  addressinput(e){
    this.setData({
      address:e.detail.value
    })
  },
  // 电话填写
  telinput(e){
    this.setData({
      tel:e.detail.value
    })
  },
  //按钮事件
  finish:function(e){
    //成功发布提示消息
    wx.showToast({
      title: '修改成功',
      duration: 3000,
    })
    setTimeout(function(){
      //返回上一页
      wx.navigateBack({
        delta: 1
      })
    }, 3000);   
  }
})
// pages/users/advice/advice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文本输入
    textinput:"",
    modalName: null
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
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
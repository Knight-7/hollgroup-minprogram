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
      textinput: e.detail.value
    })
  },
  //弹出对话框
  showModal:function(e){
    this.setData({
      modalName: "Modal"
    })
  },
  //隐藏对话框
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  //按钮事件
  finish:function(e){
    let that = this;
    if(that.data.textinput=='')
    {
      this.showModal();
      return false;
    }
    //成功发布提示消息
    wx.showToast({
      
      title: '提交成功',
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
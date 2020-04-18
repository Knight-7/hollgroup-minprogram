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
})
// pages/Publish/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],// 存图片
    title:"",   // 问题标题
    price:0.0,  // 酬劳价格
    describe:"",// 订单描述
  },
  // 标题填写
  titleinput(e){
    this.setData({
      title:e.detail.value
    })
  },
  // 价格填写
  priceinput(e){
    this.setData({
      price:e.detail.value
    })
  },
  // 订单详情
  describeinput(e){
    this.setData({
      describe:e.detail.value
    })
  },
  //按钮事件
  finish:function(e){
    //成功发布提示消息
    wx.showToast({
      title: '发布成功',
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
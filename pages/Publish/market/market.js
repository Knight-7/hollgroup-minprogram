// pages/Publish/market/market.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],// 存图片
    title:"",   // 商品标题
    price:0.0,  // 商品价格  
    describe:"",// 商品描述
    address:"",  // 地址
    tel:"",//手机号
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
  // 地址填写
  addressinput(e){
    this.setData({
      address:e.detail.value
    })
  },
  // 商品详情
  describeinput(e){
    this.setData({
      describe:e.detail.value
    })
  },
  // 电话填写
  telinput(e){
    this.setData({
      tel:e.detail.value
    })
  },
  // 图片选择
  ChooseImage(){
    wx.chooseImage({
      sizeType:['original','compressed'],//原图或压缩图
      sourceType:['album','camera'],//相册或相机
      success:(res)=>{
        /*图片不为空*/
        if(this.data.imgList.length!=0){
          this.setData({
            imgList:this.data.imgList.concat(res.tempFilePaths)
          })
        }else{
          this.setData({
            imgList:res.tempFilePaths
          })
        }
      }
    })
  },
  // 预览图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
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
    if(that.data.describe==''||that.data.price==''||that.data.title==''||that.data.price==0.0||that.data.tel=='')
    {
      this.showModal();
      return false;
    }
    console.log(that.data)
    wx.request({
      url: app.globalData.baseUrl + '/sale/publish',
      data: {
        "openId": app.globalData.userOpenId,
        "title": that.data.title,   // 问题标题
        "detail":that.data.describe,// 订单描述
        "money": that.data.price,  // 酬劳价格
        "phone": that.data.tel,//手机号,
        "picture": '1'
      },
      header: {
        'content-type': 'application/json',
      },
      success: (res)=>{
        console.log("提交成功");
        for (var i = 0; i < this.data.imgList.length; i++) {
          console.log(this.data.imgList[i]);
          wx.uploadFile({
              filePath: this.data.imgList[i],
              name: 'file',
              formData: {
                "orderId": res.data.orderId,
              },
              url: app.globalData.baseUrl + '/sale/upload',
              success: (res)=> {
                console.log(res.data)
              }
            })
        }
      },
      fail: function() {
        console.log("提交失败");
      }
    })

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
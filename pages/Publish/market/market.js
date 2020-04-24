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
    address:""  // 地址
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
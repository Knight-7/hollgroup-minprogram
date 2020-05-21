// pages/task/detail/detail.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    loadModal: false,
    title:"测试用标题",
    detai:"假装这里有份商品说明吧！",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    toName:"订单接收者",
    publishTime:"2020年3月3日",//订单发布时间
    startTime:"2020年3月3日", //接受时间
    location:"X市X街道",//收货地址
    phone:"联系方式",//接单人的联系方式
    /*
     *  订单类型：
        1 互助答疑
        2 跑腿送餐
        3 找人带饭
        4 闲置交易
     */
    orderType:0,//页面跳转传递的订单属性
    orderId:0,//页面跳转传递的订单编号
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let id=JSON.parse(options.jsonStr)
    that.setData({
      orderId:id,
      loadModal: true,
    })
    console.log("序号是",this.data.orderId);
    //后台获取订单的详细信息
    wx.request({
      url: app.globalData.baseUrl + '/order/getDealById',
      data: {
        'orderId': that.data.orderId,
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: (res)=> {
        that.setData({
          loadModal: false,
          title: res.data.title,
          detail: res.data.detail,
          price: res.data.price,
          toName: res.data.toName,
          publishTime: res.data.publishTime,
          startTime: res.data.startTime,
          location: res.data.location,
          phone: res.data.phone,
          orderType: res.data.orderType
        });
        console.log(that.data);
      },
      fail: function() {
        console.log("获取数据失败");
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
  finishstop:function(e){
    //成功发布提示消息
    wx.showToast({
      title: '订单已中止',
      duration: 3000,
    })
    setTimeout(function(){
      //返回上一页
      wx.navigateBack({
        delta: 1
      })
    }, 3000);   
  },
  //按钮事件
  finishyes:function(e){
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/order/finish',
      data: {
        'orderId': that.data.orderId
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data.msg);
      },
      fail: function() {
        console.log("完成失败");
      }
    })
    //成功发布提示消息
    wx.showToast({
      title: '操作成功',
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
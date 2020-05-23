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
    detail:"假装这里有份商品说明吧！",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    fromName:"订单发布者",
    toName:"订单接收者",
    publishTime:"2020年3月3日",//订单发布时间
    startTime:"2020年3月3日", //接受时间
    finishTime:"2020年3月3日",//结束时间
    location:"X市X街道",//收货地址
    phone:"联系方式",//接单人的联系方式
    orderId:0,//页面跳转传递的订单编号
    /*
     *  订单类型：
        1 互助答疑
        2 跑腿送餐
        3 找人带饭
        4 闲置交易
     */
    orderType:0//根据订单编号查询订单所属类型，进而归结到类型
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
    console.log("传递过来的参数序号是",this.data.orderId);

    //TODO:根据传递过来的订单编号获取相应的订单信息，并赋值到DATA中
    wx.request({
      url: app.globalData.baseUrl + '/order/getHistoryDealById',
      data: {
        'orderId': id,
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
          fromName: res.data.fromName,
          toName: res.data.toName,
          publishTime: res.data.publishTime,
          startTime: res.data.startTime,
          finishTime: res.data.finishTime,
          location: res.data.location,
          phone: res.data.phone,
          orderType: res.data.orderType,
          imgList: res.data.imgList
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
  }
})
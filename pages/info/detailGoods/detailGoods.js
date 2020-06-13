// pages/task/detail/detail.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    title:"",
    detai:"",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    location:"X市X街道",//收货地址
    phone:"联系方式",//联系方式
    /*
     *  订单类型：
        1 互助答疑
        2 跑腿送餐
        3 找人带饭
        4 闲置交易
     */
    orderId:0,//页面跳转传递的订单编号
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let id=JSON.parse(options.jsonStr)
    that.setData({
      orderId:id
    })
    console.log("序号是",this.data.orderId);
    console.log(this.data);
    //后台获取订单的详细信息
    wx.request({
      url: app.globalData.baseUrl + '/sale/findSaleByOrderId',
      data: {
        'id': that.data.orderId,
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: (res)=> {
        that.setData({
          title: res.data.title,
          detail: res.data.detail,
          price: res.data.price,
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
  },
  //按钮事件
  finishstop:function(e){
    //成功发布提示消息
    let that=this
    wx.request({
      url: app.globalData.baseUrl + '/sale/cancel',
      data: {
        'id': that.data.orderId,
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: (res)=> {
        console.log("下架成功");
      },
      fail: function() {
        console.log("下架失败");
      }
    }),

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
  changeinfo:function(e){
    // 拿到点击的参数
    let id=e.currentTarget.dataset.id;
    console.log('我传入的data-id+',id);
    // 把对象转为string
    let idstr=JSON.stringify(id);
    wx.navigateTo({
      url:'/pages/info/changeGoods/changeGoods?jsonStr='+idstr,
    })
  }
})
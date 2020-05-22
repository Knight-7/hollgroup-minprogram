// pages/task/detail/detail.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    title:"测试用标题",
    isfav:false,//是否已收藏，true表示是
    detail:"假装这里有份商品说明吧！",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    location:"X市X街道",//收货地址
    phone:"联系方式",
    orderType:"",//页面跳转传递的属性
    //SendOrder 接单送饭页面
    //BringOrder 找人带饭发单页面
    //QandAOrder 悬赏问答
    //MarketOrder 二手交易
    orderId:0,//页面跳转传递的订单编号
    ifhidden:true//是否隐藏地址，初始默认否
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let id=JSON.parse(options.jsonStr)
    this.data.orderId=id
    console.log("序号是",this.data.orderId);
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
  finish:function(e){
    let that = this;
    //成功发布提示消息
    wx.showToast({
      title: '接受成功',
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
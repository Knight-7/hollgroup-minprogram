// pages/task/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    title:"测试用标题",
    word:"假装这里有份商品说明吧！",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    worker:"订单接收者",
    publictime:"2020年3月3日",//订单发布时间
    accepttime:"2020年3月3日", //接受时间
    pos:"X市X街道",//收货地址
    way:"联系方式",//接单人的联系方式
    /*
     *  订单类型：
        1 互助答疑
        2 跑腿送餐
        3 找人带饭
        4 闲置交易
     */
    cometype:0,//页面跳转传递的订单属性
    comeid:0,//页面跳转传递的订单编号
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let item=JSON.parse(options.strr)
    let id=JSON.parse(options.jsonStr)
    that.setData({
      cometype:item,
      comeid:id
    })
    console.log("传递过来的参数类型是",this.data.cometype,"序号是",this.data.comeid);
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
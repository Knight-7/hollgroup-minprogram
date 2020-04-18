// pages/task/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    title:"测试用标题",
    word:"",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var queryBean=JSON.parse(options.queryBean);
    that.setData({
      QueryBean:queryBean,
      word:QueryBean.JSON
    })
    console.log(that.data.QueryBean)
  },
  // 预览图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  } ,
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})
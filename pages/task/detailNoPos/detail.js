// pages/task/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    QueryBean:"",
    title:"测试用标题",
    isfav:false,//是否已接受，true表示是
    word:"假装这里有份商品说明吧！",
    // 存放图片的列表
    imgList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679286314,1857044548&fm=26&gp=0.jpg"
  ],
    price:0,
    way:"联系方式",
    cometype:"",//页面跳转传递的属性
    //favorite 我的收藏
    //historys 浏览历史
    //SendOrder 接单送饭页面
    //BringOrder 找人带饭发单页面
    //QandAOrder 悬赏问答
    //MarketOrder 二手交易
    comeid:0,//页面跳转传递的序号
    ifhidden:true//是否隐藏地址，初始默认否
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let item=JSON.parse(options.strr)
    let id=JSON.parse(options.jsonStr)
    this.data.cometype=item,
    this.data.comeid=id
    console.log("传递过来的参数类型是",this.data.cometype,"序号是",this.data.comeid);
    
  },
  // 预览图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  }
})
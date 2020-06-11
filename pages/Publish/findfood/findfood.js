// pages/Publish/food/food.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  /*data: {
    imgList: [["http://e.hiphotos.baidu.com/bainuo/crop=37,0,776,470;w=719;q=80/sign=fffff86143fbfbedc8166c3f45c3c01a/728da9773912b31b1501a4778e18367adab4e17b.jpg",
    "http://5b0988e595225.cdn.sohucs.com/images/20180722/5d5c35476ab64ceea3d12bba3df128f0.jpeg",
    "http://5b0988e595225.cdn.sohucs.com/images/20181229/6cea629f0f81464bb8f73fee78eb225a.jpeg",
    "http://g.hiphotos.baidu.com/baike/pic/item/0823dd54564e92584fed4b809282d158cdbf4e87.jpg"],
    ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591538319880&di=324d427145fdd3464576d4a6088fdeca&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20180615%2F62422160311529026224.jpg",
    "http://img4.imgtn.bdimg.com/it/u=306456445,1778454513&fm=26&gp=0.jpg",
    "http://5b0988e595225.cdn.sohucs.com/images/20171214/bfed8bb287d2436f9c81f6cdfc72a36d.jpeg"],
    ["http://img3.imgtn.bdimg.com/it/u=567293350,3171394379&fm=26&gp=0.jpg",
    "http://img0.imgtn.bdimg.com/it/u=639136053,2567499657&fm=26&gp=0.jpg",
    "http://cp2.douguo.net/upload/caiku/2/2/9/yuan_22496fd9d9fdaefe0d1feaf05c67fbc9.jpg"]],// 存图片
    title:"",   // 问题标题
    price:0.0,  // 酬劳价格
    describe:"",// 订单描述
    address:"",//地址
    tel:"",//手机号
    multiArray: [
      ['正餐便当','加菜小吃','水果饮料'],
      ['烤肉饭','烧鸭饭','鸡排饭','猪肉馄炖']
    ],
    multiIndex: [0, 0],
    url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588712786149&di=478c5e5fdd37c0d93c214c0683a08fc7&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F161127%2F330860-16112F3041194.jpg",//图片地址
    ifhidden:true,//是否隐藏图片，初始默认是
    choosedImage: '00.jpg'
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
    console.log(this.data.multiIndex)
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    console.log("值是"+e.detail.value+"\n");
    // 根据第一列定位的不同，显示不同的初始界面
    switch (data.multiIndex[0]) {
      case 0:
        //选择了选项一
        data.multiArray[1] = ['烤肉饭','烧鸭饭','鸡排饭','猪肉馄炖'];
        break;
      case 1:
        data.multiArray[1] = ['酸菜鱼','炸串里脊','煎饼果子'];
        break;
      case 2:
        data.multiArray[1] = ['水果捞', '巧克力奶茶', '双皮奶'];
        break;
    }
    //console.log(e.detail.value);
    console.log(data.multiIndex);//multiIndex数组里第一个是第一列选的值，第二个是第二列的值
    var choosedImage = data.multiIndex[0].toString() + data.multiIndex[1].toString()
    this.setData({
      choosedImage: choosedImage + 'jpg'
    })
    //根据选项选取URL地址
    this.setData({
      url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588712891225&di=6d64c66121ec77384103a53075999587&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190807%2F14%2F1565158331-OkKyUxVMFj.jpg",
      ifhidden:false
    })
    this.setData(data);
    
  },
  */
 data: {
  imgList: [["http://e.hiphotos.baidu.com/bainuo/crop=37,0,776,470;w=719;q=80/sign=fffff86143fbfbedc8166c3f45c3c01a/728da9773912b31b1501a4778e18367adab4e17b.jpg",
  "http://5b0988e595225.cdn.sohucs.com/images/20180722/5d5c35476ab64ceea3d12bba3df128f0.jpeg",
  "http://5b0988e595225.cdn.sohucs.com/images/20181229/6cea629f0f81464bb8f73fee78eb225a.jpeg",
  "http://g.hiphotos.baidu.com/baike/pic/item/0823dd54564e92584fed4b809282d158cdbf4e87.jpg"],
  ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591538319880&di=324d427145fdd3464576d4a6088fdeca&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20180615%2F62422160311529026224.jpg",
  "http://img4.imgtn.bdimg.com/it/u=306456445,1778454513&fm=26&gp=0.jpg",
  "http://5b0988e595225.cdn.sohucs.com/images/20171214/bfed8bb287d2436f9c81f6cdfc72a36d.jpeg"],
  ["https://pic.ecook.cn/web/260135231.jpg!wd780",
  "http://pic.sc.chinaz.com/files/pic/pic9/201808/zzpic13504.jpg",
  "http://cp2.douguo.net/upload/caiku/2/2/9/yuan_22496fd9d9fdaefe0d1feaf05c67fbc9.jpg"]],// 存图片
  title:"",   // 问题标题
  price:0.0,  // 酬劳价格
  describe:"",// 订单描述
  address:"",//地址
  tel:"",//手机号
  multiArray: [
    ['正餐便当','加菜小吃','水果饮料'],
    ['烤肉饭','烧鸭饭','鸡排饭','猪肉馄炖']
  ],
  multiIndex: [0, 0],
  url:"http://e.hiphotos.baidu.com/bainuo/crop=37,0,776,470;w=719;q=80/sign=fffff86143fbfbedc8166c3f45c3c01a/728da9773912b31b1501a4778e18367adab4e17b.jpg",//图片地址
  ifhidden:false,//是否隐藏图片，初始默认是
  choosedImage: '00.jpg'
},
MultiChange(e) {
  this.setData({
    multiIndex: e.detail.value
  })
},
MultiColumnChange(e) {
  let data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  data.multiIndex[e.detail.column] = e.detail.value;
  console.log("值是"+e.detail.value+"\n");
  // 根据第一列定位的不同，显示不同的初始界面
  switch (data.multiIndex[0]) {
    case 0:
      //选择了选项一
      data.multiArray[1] = ['烤肉饭','烧鸭饭','鸡排饭','猪肉馄炖'];
      break;
    case 1:
      data.multiArray[1] = ['酸菜鱼','炸串里脊','煎饼果子'];
      break;
    case 2:
      data.multiArray[1] = ['水果捞', '巧克力奶茶', '双皮奶'];
      break;
  }
  this.setData({
    url:this.data.imgList[data.multiIndex[0]][data.multiIndex[1]],
    ifhidden:false
  })
  var choosedImage = data.multiIndex[0].toString() + data.multiIndex[1].toString()
  this.setData({
    choosedImage: choosedImage + '.jpg'
  })
  this.setData(data);
  console.log(this.data.choosedImage)
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
  //地址填写
  addressinput(e){
    this.setData({
      address:e.detail.value
    })
  },
  // 订单详情
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
    if(that.data.describe==''||that.data.price==''||that.data.title==''||that.data.price==0.0||that.data.tel==''
    ||that.data.address=='')
    {
      this.showModal();
      return false;
    }
    console.log(that.data)
    wx.request({
      url: app.globalData.baseUrl + '/order/submit',
      data: {
        "openid": app.globalData.userOpenId,
        "title": that.data.title,   // 问题标题
        "price": that.data.price,  // 酬劳价格
        "type": '1',
        "detail": that.data.describe,// 订单描述
        "location": that.data.address,//地址
        "phone": that.data.tel,//手机号,
      },
      header: {
        'content-type': 'application/json',
      },
      success: (res)=>{
        console.log("提交成功");
        wx.request({
          url: app.globalData.baseUrl + "/image/setImage",
          data: {
            "orderId": res.data.orderId,
            "imageName": that.data.choosedImage,
          },
          header: {
            'content-type': 'application/json'
          },
          success: (res) =>{
            console.log("上传成功")
          },
          fail: function() {
            console.log("上传失败")
          }
        })
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
  },
  onLoad: function() {
    console.log(app.globalData.userOpenId)
  }
})
// pages/Publish/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],// 存图片
    title:"",   // 问题标题
    price:0.0,  // 酬劳价格
    describe:"",// 订单描述
    tel:"",//手机号
    multiArray: [
      ['正餐便当','加菜小吃','水果饮料'],
      ['烤肉饭','烧鸭饭','鸡排饭','猪肉馄炖']
    ],
    multiIndex: [0, 0],
    url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588712786149&di=478c5e5fdd37c0d93c214c0683a08fc7&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F161127%2F330860-16112F3041194.jpg",//图片地址
    ifhidden:true//是否隐藏图片，初始默认是
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
    //console.log(e.detail.value);
    console.log(data.multiIndex);//multiIndex数组里第一个是第一列选的值，第二个是第二列的值
    //根据选项选取URL地址
    this.setData({
      url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588712891225&di=6d64c66121ec77384103a53075999587&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190807%2F14%2F1565158331-OkKyUxVMFj.jpg",
      ifhidden:false
    })
    this.setData(data);
    
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
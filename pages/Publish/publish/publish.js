// pages/Publish/publish/publish.js
const app = getApp();
Component({
  /**
   * 组件的属性列表 
   */
  properties: {
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '互助答疑',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1060765678,3078952601&fm=26&gp=0.jpg',
        url: 'answer/answer'
      },
      {
        title: '跑腿送餐',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585669638660&di=9c874250bd1c63b9a913ce63800665ba&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F14%2F77%2F5b83fd5259273.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
        url: 'food/food'
      },
      {
        title: '找人带饭',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3290984563,497880246&fm=26&gp=0.jpg',
        url: 'findfood/findfood'
      },
      {
        title: '闲置交易',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585901354035&di=d83fc2691134bb69fc5716c3ddaec4ab&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F6d81800a19d8bc3e120ccce7898ba61ea8d34593.jpg',
        url: 'market/market'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toChild(e){
      // 跳转相关页面
      wx.navigateTo({
        url: '/pages/Publish/' + e.currentTarget.dataset.url
      })
    },
  }
})

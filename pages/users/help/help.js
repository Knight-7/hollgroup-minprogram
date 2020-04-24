// pages/users/help/help.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Telway:'123123123',//客服联系电话
    infos:[
      {
        kindname:"页面引导",//大类名
        answers:[{
          id:1,
          word:"首页会展示最新消息，可供浏览",
        },{
          id:2,
          word:"任务页面可以浏览当前所有公开的悬赏招募",
        },{
          id:3,
          word:"信息页面可以浏览自己的收藏帖子和浏览历史",
        },{
          id:4,
          word:"用户页面可以修改资料",
        }]},
      {
        kindname:"订单问题",
        answers:[
        {
          id:1,
          word:"订单问题请注意遵守交易规则。"
        }
      ]
    }],
  },
  CopyLink:function(e) {
    wx.setClipboardData({
      data:this.data.Telway,
      success:res=> {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
})
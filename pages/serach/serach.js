var amapFile = require('../../libs/amap-wx.js');
Page({
  data: {
    tips: {}
  },
  onLoad: function () {

  },
  bindInput: function (e) {
    var that = this;
    var keywords = e.detail.value;
    //var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: '8c6ff40972a7b06107a52c9b50c1488c' });
    myAmapFun.getInputtips({
      keywords: keywords,
      datatype:"poi",
      location: '',
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }
        console.log(data.tips)
      }
    })
  },
  bindSearch: function (e) {
    var keywords = e.currentTarget.dataset.keywords;
    var url = '../../pages/index/index?keywords=' + keywords;
    console.log(e,url)
    wx.redirectTo({
      url: url
    })
  }
})
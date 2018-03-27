//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cars: [{ prfx: '渝D', number: 'DZ731' }, { prfx: '渝F', number: 'DZ731' }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   // if (app.globalData.userInfo.phoneNumber) {
      // this.setData({
      //   userInfo: app.globalData.userInfo,
      //   hasUserInfo: true
      // })
  //  }else{
      // wx.navigateTo({
      //   url: '/pages/login/login',
      // })
  //  }

      
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toBuy: function () {
    wx.navigateTo({
      url: '../../pages/pay/pay',
    })
  },
  getCar(e) {
    console.log(e)
    var carNumber = e.currentTarget.dataset.number || ''
    wx.navigateTo({
      url: '../../pages/car/car?carNumber=' + carNumber,
    })
  },
  shareLocation(e) {
    wx.navigateTo({
      url: '../../pages/location/location',
    })
  }, toMyLocation(e) {
    wx.navigateTo({
      url: '../../pages/location/mylocation',
    })
  }
})

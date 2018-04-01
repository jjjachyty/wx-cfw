// pages/garage/garage.js
var Zan = require('../../ui/index');
Page(Object.assign({}, Zan.NoticeBar, {
 
  /**
   * 页面的初始数据
   */
  data: {
    parkCarNumber:'',
    ads: {
      url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
    },
    movable:{text:'凡在线购买停车包月套餐用户，可任意停本平台套餐内全国运营的所有车库'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.parkCarNumber= '渝DDZ731'
    this.setData({ parkCarNumber: options.parkCarNumber})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initZanNoticeBarScroll('movable');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  viewADS () {
    wx.redirectTo({
      url: '../webview/webview',
    })
  }

}))
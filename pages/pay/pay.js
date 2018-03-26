

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        padding: 0,
        value: '800',
        name: '800元',
      },
      {
        padding: 0,
        value: '750',
        name: '750元',
      },
      {
        padding: 0,
        value: '700',
        name: '700元',
      },
      {
        padding: 0,
        value: '650',
        name: '650元',
      },
      {
        padding: 0,
        value: '600',
        name: '600元',
      },
      {
        padding: 0,
        value: '550',
        name: '550元',
      },
    ],

    checked: {
      base: 1,
      color: -1,
      form: -1
    },

    activeColor: '#4b0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   paypay : function () {
     wx.requestPayment({
       'timeStamp': '',
       'nonceStr': '',
       'package': '',
       'signType': 'MD5',
       'paySign': '',
       'success': function (res) {
       },
       'fail': function (res) {
       }
     })
   }
})
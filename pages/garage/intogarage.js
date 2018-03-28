// pages/garage/garage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopup: true,
    showKeyboardPopup:true,
    parkCarNumber:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.togglePopup()
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
    this.keyboard = this.selectComponent("#keyboard");

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
  showKeyboard () {
    
    this.setData({
      showKeyboardPopup: !this.data.showKeyboardPopup,
    });
  },
  togglePopup(e) {
    this.setData({
      showPopup: !this.data.showPopup,
    });

    if (e){
      this.setData({
        parkCarNumber: e.currentTarget.dataset.name || ''
      });
      
    }

  }
})
//app.js
var WXBizDataCrypt = require('libs/WXBizDataCrypt.js')

let appid = "wxb5f20ab8f1933772";
let secret = "664c523b4fbeee2e6661f2166ff1da45";
const Bmob = require('libs/bmob/bmob.js');
Bmob.initialize("147d00d4168a717abfbd62618d061d52", "c581844c3ef0af9360a27362756a6227");

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        Bmob.Cloud.run('getSessionKey', { "appid": appid, "secret": secret,"jscode":res.code }, {
          success: function (result) {
            var sessionkey = result.session_key
            var openid = result.openid
            var pc = new WXBizDataCrypt(appid, sessionkey)

            wx.getUserInfo({
              success: function (res) {
                console.log("res",res)
                var data = pc.decryptData(res.encryptedData, res.iv)
                console.log('解密后 data: ', data)
              }
              
            })
          },
          error: function (error) {
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
       // if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              var pages = getCurrentPages()    //获取加载的页面( 页面栈 )
              console.log("pages",pages)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
      //  }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
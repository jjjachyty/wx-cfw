var amapFile = require('../../libs/amap-wx.js');
var app = getApp()
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    numbers:300,
    longitude: '',
    keyworld:'',
    address:''
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function (option) {
    console.log(option)
    var location = ""
    if (option && option.keyworld) {
      location = option.location.split(",")
      this.setData({
        markers: [{
          iconPath: "../../imgs/marker_checked.png",
          id: 0,
          latitude: location[1],
          longitude: location[0],
          width: 30,
          height: 30
        }],
        latitude: location[1],
        longitude: location[0],
        keyworld: option.keyworld,
        address: option.address
      })

    } else {
      // var  that = this
      // wx.getLocation({
      //   type: 'wgs84',
      //   success: function (res) {
      //     var latitude = res.latitude
      //     var longitude = res.longitude
      //     var speed = res.speed
      //     var accuracy = res.accuracy
      //     console.log(res)
      //     that.setData({
      //       latitude: latitude,
      //       longitude: longitude
      //     })
      //   }
      // })
      // showMarkerInfo()
      //this.data.markers[3].iconPath = app.globalData.userInfo.avatarUrl
      var that = this;
      var myAmapFun = new amapFile.AMapWX({ key: '8c6ff40972a7b06107a52c9b50c1488c' });
      myAmapFun.getRegeo({
        success: function (data) {
          //成功回调
          console.log("data",data)
          that.setData({
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            address: data[0].regeocodeData.aois[0].name

          })
        },
        fail: function (info) {
          //失败回调
          console.log(info)
        }
      })
    }
  },
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        data[j].iconPath = "../../imgs/marker.png"; //如：..­/..­/img/marker_checked.png
      } else {
        data[j].iconPath = "../../imgs/marker_checked.png"; //如：..­/..­/img/marker.png
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  },
  mylocation(){
    this.onLoad()
  },
  touserinfo(){
    this.touserinfo()
  },
  tosearch() {
    wx.navigateTo({
      url: '../../pages/serach/serach'
    })
  },
  touserinfo() {
    wx.navigateTo({
      url: '../../pages/profile/profile'
    })
  },
  gotoaddress(){
    wx.openLocation({ //出发wx.openLocation API

      latitude: Number(this.data.latitude), //坐标纬度（从地图获取坐标）

      longitude: Number(this.data.longitude), //坐标经度（从地图获取坐标）

      name: this.data.keyworld, //打开后显示的地址名称

      address: this.data.address //打开后显示的地址汉字

    })
  }

})
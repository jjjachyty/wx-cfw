var amapFile = require('../../libs/amap-wx.js');
var app = getApp()
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    controls: [{
      id: 1,
      iconPath: '/imgs/location.png',
      position: {
        left: 10,
        top: 410,
        width: 30,
        height: 30
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '/imgs/serach.png',
      position: {
        left: 10,
        top: 380,
        width: 30,
        height: 30
      },
      clickable: true
      }, {
        id: 3,
        iconPath: '/imgs/avatar.png',
        position: {
          left: 10,
          top: 440,
          width: 40,
          height: 40
        },
        clickable: true
      }]

  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function (option) {
    console.log(option)
    var location = ""
    if (option && option.keywords) {
      location = option.keywords.split(",")
      this.setData({
        markers: [{
          // iconPath: "../../imgs/marker_checked.png",
          id: 0,
          latitude: location[1],
          longitude: location[0],
          width: 50,
          height: 50
        }],
        latitude: location[1],
        longitude: location[0]
      })
    } else {
      var  that = this
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
          console.log(res)
          that.setData({
            latitude: latitude,
            longitude: longitude
          })
        }
      })
      // showMarkerInfo()
      //this.data.markers[3].iconPath = app.globalData.userInfo.avatarUrl
      
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
  controltap(e) {
    console.log(e)
    switch(e.controlId){
      case 1:
        this.onLoad()
        break
      case 2:
        this.tosearch()
        break
      case 3:
        this.touserinfo()
    }


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
  }

})
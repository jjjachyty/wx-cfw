Page({
  data: {
    step:2,
    phone:'',
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: true,
    plain: false,
    loading: false
  },
  bindphoneinput(e){
    if (e.detail.value.length == 11){
      this.setData({ phone: e.detail.value, disabled:false})
    }else{
      this.setData({ disabled: true })
    }
  },
  next(){
    console.log(this.data)
    wx.navigateTo({
      url: '../../pages/sigin/sigin?phone='+this.data.phone,
    })
  }
})
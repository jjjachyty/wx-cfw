// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
         
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    isShow: false,
    // abbreviation: ['冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '川', '青', '藏', '琼', '宁', '京', '津', '沪', '粤','渝'],
    // alphabet: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    // numeral: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
    carNumber:'',
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */

    //隐藏弹框
    hideKeyboard() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showKeyboard() {
      console.log("showKeyboard keyboard")

      this.setData({
        isShow: !this.data.isShow
      })
    },

    _delKey(){
      if (this.data.carNumber != ''){
        this.setData({
          carNumber: this.data.carNumber.substring(0, this.data.carNumber.length - 1)
        })
      }
      this.triggerEvent('keyPress')
    },

    getCarNumber() {
      return this.data.carNumber
    },

    _keyPress(e){
      var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (this.data.carNumber.length < 7) {
        if (this.data.carNumber.length === 0){
          if (!reg.test(e.currentTarget.dataset.key)) {
                    return
          }
        }else{
          if (reg.test(e.currentTarget.dataset.key)) {
            return
          }
        
      }
        this.setData({
          carNumber: this.data.carNumber + e.currentTarget.dataset.key
        })
      }
        
      this.triggerEvent('keyPress')
    }
  }
})
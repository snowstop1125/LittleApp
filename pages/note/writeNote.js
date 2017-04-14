// pages/note/writeNote.js
var util = require('../../utils/util.js')
Page({
  data:{
    date:'',
    weather:['无','晴','多云','毛毛雨','中雨'],
    index: 0,
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function(e) {

    this.setData({
      index: e.detail.value
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //var date=Date.now();
    var that=this;
    util.formatDate(new Date)
    console.log(util.formatDate(new Date))
    that.setData({
        date:util.formatDate(new Date)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
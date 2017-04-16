// pages/note/writeNote.js
var util = require('../../utils/util.js')
Page({
  data:{
    noteMessage: {
      date: "",
      weatherIndex: "",
      title: "",
      content: ""
    },
    weather:['无','晴','多云','毛毛雨','中雨']
  },
  bindDateChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.date = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    })
  },
  bindWeatherChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.weatherIndex = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
  },
  titleBlur : function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.title = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
    console.log(thi.data.noteMessage.title);
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //var date=Date.now();
    var that=this;
    var tempMessage = this.data.noteMessage;
    tempMessage.date = util.formatDate(new Date);
    tempMessage.weatherIndex = 0;
    that.setData({
        noteMessage : tempMessage
    });
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
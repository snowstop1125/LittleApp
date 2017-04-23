// pages/note/writeNote.js
var util = require('../../utils/util.js')
Page({
  data:{
    noteMessage: {
      id: 0,
      date: util.formatDate(new Date),
      weatherIndex: 0,
      title: "",
      content: "",
      textSize:30,
      flag: false
    },
    weather:['无','晴','多云','毛毛雨','中雨'],
    textSize:['25','30','35','40','45'],
    endDate:util.formatDate(new Date),
    show:false
  },
  dateChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.date = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
  },
  weatherChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.weatherIndex = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
  },
  titleChange : function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.title = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
  },
  contentChange : function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.content = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    });
  },
  toClear:function(e){
    var that=this;
    wx.showModal({
      title: '提示',
      confirmText:'确定清空',
      cancelText:'再想想',
      confirmColor:'#50c298',
      cancelColor:'#c4c4c4',
      content: '是否清空正文内容',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            noteMessage: {
              id: 0,
              date: util.formatDate(new Date),
              weatherIndex: 0,
              title: "",
              content: "",
              textSize: 30,
              flag: false
            }
          });
        }
      }
    });     
  },
  showChangeSize:function(e){
      var that = this;
      that.data.show=!that.data.show;
       that.setData({
          show:that.data.show
      })
  },
  sizeChange:function(e){
      var that = this;
      var idx = e.currentTarget.dataset.sizeidx;
      var size=that.data.textSize[idx];
      var noteMessage=that.data.noteMessage
      noteMessage.textSize=size;
      that.setData({
          noteMessage:noteMessage
      })
  },
  saveDiary: function(e) {
    var note = this.data.noteMessage;
    wx.getStorage({
      key: 'DiaryStore',
      success: function(res){
        // success
        var messageList = res.data;
        console.log(note);
        var id = messageList[messageList.length - 1].id;
        note.id = id + 1;
        messageList.push(note);
        wx.setStorageSync('DiaryStore', messageList);
      },
      fail: function(res) {
        // fail
        console.log(note);
        note.id = 0;
        var messageList = [note];
        wx.setStorageSync('DiaryStore', messageList);
      },
      complete: function(res) {
        // complete
        var pages = getCurrentPages();
        var prevPage = getCurrentPages()[pages.length - 2];
        var messageList = wx.getStorageSync('DiaryStore');
        prevPage.setData({
          noteItem: messageList,
          length: messageList.length
        })
        wx.navigateBack();
      }
    });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
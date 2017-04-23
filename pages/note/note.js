//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    noteItem:[],
    weather:['无','晴','多云','毛毛雨','中雨']
  },
  onLoad: function () {
    var noteItem = this.data.noteItem;
    var that = this;
    wx.getStorage({
      key: 'DiaryStore',
      success: function(res){
        // success
        noteItem = res.data;
      },
      complete: function(res) {
        // complete
        noteItem.sort(function(a, b) {
          return new Date(b.dateTime) - new Date(a.dateTime);
        });
        var length = noteItem.length;
        that.setData({
          length: length,
          noteItem: noteItem
        }); 
      }
    });
  },
  toFlag:function(e){
    var that = this;
    var idx = e.currentTarget.dataset.flagidx;
    var noteItem = that.data.noteItem;
    var thisNote = noteItem[idx];
    thisNote.flag = !thisNote.flag;
    if(thisNote.flag == true){
      wx.showToast({
        title: '已标记',
        icon: 'success',
        duration: 1500
      });
    } else {
      wx.showToast({
        title: '取消标记',
        icon: 'success',
        duration: 1500
      });
    }
    that.setData({
        noteItem:noteItem
    });
    console.log(thisNote.id);
    wx.setStorageSync('DiaryStore', noteItem);
  },
  toDelete:function(e){
    var that = this;
    var idx = e.currentTarget.dataset.deleteidx;
    var thisNote = that.data.noteItem[idx];
    wx.showModal({
      title: '提示',
      confirmText:'不要了！',
      cancelText:'再想想',
      confirmColor:'#50c298',
      cancelColor:'#c4c4c4',
      content: '确定不要了？',
      success: function(res) {
        if (res.confirm) {
          var noteItem = that.data.noteItem;
          noteItem.splice(idx,1);
          that.setData({
            noteItem: noteItem
          });
          console.log(thisNote.id);
          wx.setStorageSync('DiaryStore', noteItem);
          that.onload;
        }
      }
    });
  } 
})

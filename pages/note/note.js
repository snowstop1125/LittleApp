//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    noteitem:[
      {
      id:0,
      flag:true,
      title:'还有设置页面自定义参数？',
      content:'还有设置页面自定义参数？有没有大婶有个网址参考一下哇',
      fileLength:'1',
      weather:'多云',
      date:'2017-04-14'
    },
    {
      id:1,
      flag:false,
      title:'哈哈哈哈哈哈',
      content:'哈哈哈哈哈哈哈哈哈哈',
      fileLength:'1',
      weather:'多云',
      date:'2017-04-14'
    }
    ]
  },
  onLoad: function () {
    const length = this.data.noteitem.length
    this.setData({
      length:length,
      noteitem: this.data.noteitem
    })
  
    // for (let i = 0; i < length; ++i) {
    //    noteitem.push(i)
    //   console.log("数组"+noteitem)
    // }
   
  },
  toflag:function(e){
    var that = this;
    var idx = e.currentTarget.dataset.flagidx;
    var noteitem=that.data.noteitem;
    var thisnote=noteitem[idx];
    thisnote.flag=!thisnote.flag;
    if(thisnote.flag==true){
      wx.showToast({
        title: '已标记',
        icon: 'success',
        duration: 1500
      })
    }else{
      console.log("flag"+this.data.flag);
      wx.showToast({
        title: '取消标记',
        icon: 'success',
        duration: 1500
      })
    }
    that.setData({
        noteitem:noteitem
    })

  },
   todelete:function(e){
    var that=this;
    var idx = e.currentTarget.dataset.deleteidx;
    wx.showModal({
  title: '提示',
  confirmText:'不要了！',
  cancelText:'再想想',
  confirmColor:'#50c298',
  cancelColor:'#c4c4c4',
  content: '确定不要了？',
  success: function(res) {
    if (res.confirm) {
      var noteitem=that.data.noteitem;
      noteitem.splice(idx,1)
      that.setData({
        noteitem:noteitem
    })
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
  }
  
})

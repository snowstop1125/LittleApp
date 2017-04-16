// pages/note/writeNote.js
var util = require('../../utils/util.js')
Page({
  data:{
<<<<<<< HEAD
    noteMessage: {
      date: "",
      weatherIndex: "",
      title: "",
      content: ""
    },
    weather:['无','晴','多云','毛毛雨','中雨']
=======
    enddate:'',
    date:'',
    weather:['无','晴','多云','毛毛雨','中雨'],
    index: 0,
    value:"小程序数据分析，是面向小程序开发者、运营者的数据分析工具，提供关键指标统计、实时访问监控、自定义分析等，帮助小程序产品迭代优化和运营。主要功能包括每日例行统计的标准分析，以及满足用户个性化需求的自定义分析。常规分析概况：提供小程序关键指标趋势以及top页面访问数据，快速了解小程序发展概况；访问分析：提供小程序用户访问规模、来源、频次、时长、深度、留存以及页面详情等数据，具体分析用户新增、活跃和留存情况；实时统计：提供小程序实时访问数据，满足实时监控需求；用户画像：提供小程序的用户画像数据，包括用户地域、性别、平台类型、设备等，功能正在开发中。详情查看常规分析自定义分析自定义分析：配置自定义上报，精细跟踪用户在小程序内的行为，结合用户属性、系统属性、事件属性进行灵活多维的事件分析和漏斗分析，满足小程序的个性化分析需求；详情查看自定义分析配置自定义上报，精细跟踪用户在小程序内的行为，结合用户属性、系统属性、事件属性进行灵活多维的事件分析和漏斗分析，满足小程序的个性化分析需求；满足实时监控需求；用户画像：提供小程序的用户画像数据，包括用户地域、性别、平台类型、设备等，功能正在开发中。详情查看常规分析自定义分析自定义分析：配置自定义上报，精细跟踪用户在小程序内的行为，结合用户属性、系统属性、事件属性进行灵活多维的事件分析和漏斗分析，满足小程序的个性化分析需求；详情查看自定义分析配置自定义上报，精细跟踪用户在小程序内的行为，结合用户属性、系统属性、事件属性进行灵活多维的事件分析和漏斗分析，满足小程序的个性化分析需求；详情查看自定义分析"
>>>>>>> 87e5b12865964383c3f3529bf4f523d2494d2875
  },
  bindDateChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.date = e.detail.value;
    this.setData({
      noteMessage: tempMessage
    })
  },
<<<<<<< HEAD
  bindWeatherChange: function(e) {
    var tempMessage = this.data.noteMessage;
    tempMessage.weatherIndex = e.detail.value;
=======
  bindPickerChange: function(e) {
>>>>>>> 87e5b12865964383c3f3529bf4f523d2494d2875
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
        value:""
        })
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
     
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //var date=Date.now();
    var that=this;
    var tempMessage = this.data.noteMessage;
    tempMessage.date = util.formatDate(new Date);
    tempMessage.weatherIndex = 0;
    that.setData({
<<<<<<< HEAD
        noteMessage : tempMessage
    });
=======
        date:util.formatDate(new Date),
        enddate:util.formatDate(new Date)
    })
>>>>>>> 87e5b12865964383c3f3529bf4f523d2494d2875
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
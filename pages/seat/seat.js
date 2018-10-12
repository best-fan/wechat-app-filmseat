// pages/seat/seat.js
var timer;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 座位数组
    seatArr: '',
    // 已选择座位数组
    selectArr: '',
    // 是否显示弹窗
    isShow: false,
    //canvas top  left  width 百分比  caheight 
    top: 10,
    left: 10,
    cawidth: 48,
    caheigth: 20,
    isHidden: false,
    //可移动区域大小
    movableheight: 700,
    floatwidth: 50,
    floatheight: 22,
    scale:1.3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '正在加载',
    })
    if (options.id == "A") {
      //座位循环
      var row = 10;
      var col = 20;
      var seatArr = new Array(row); //row行
      var src = "seat.png";
      var m = {};
      var s = 0;
      for (var i = 0; i < row; i++) {
        seatArr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
          var ss = Math.ceil(Math.random() * col);
          m.num = j;
          if (ss % j == 3) {
            m.src = "noseat.png"
          } else {
            m.src = src
          }
          seatArr[i][j] = m;
          m = {}
        }
      }
      this.setData({
        seatArr: seatArr
      })
    } else if (options.id == "B") {
      //座位循环
      var row = 10;
      var col = 30;
      var seatArr = new Array(row); //row行
      var src = "seat.png";
      var m = {};
      var s = 0;
      if (row > 13) {
        this.setData({
          movableheight: this.data.movableheight + (row - 13) * 40
        })
      }
      if (row > 10) {
        this.setData({
          floatheight: 22 + (row - 10) * 1.9,
          caheigth: 22 + (row - 10) * 1.9 - 2
        })
      }
      if (col > 20) {
        this.setData({
          floatwidth: 50 + (col - 20) * 2.25,
          cawidth: 50 + (col - 20) * 2.25 - 2
        })
      }
      for (var i = 0; i < row; i++) {
        seatArr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
          var ss = Math.ceil(Math.random() * col);
          m.num = j;
          m.src = src
          if (ss % j == 1) {
            m.src = "no"
          } else if (ss % j == 3) {
            m.src = "noseat.png"
          } else {
            m.src = src
          }
          seatArr[i][j] = m;
          m = {}
        }
      }
      this.setData({
        seatArr: seatArr
      })
    } else if (options.id == "C") {
      //座位循环
      var row = 20;
      var col = 30;
      var seatArr = new Array(row); //row行
      var src = "seat.png";
      var m = {};
      var s = 0;
      if (row > 13) {
        this.setData({
          movableheight: this.data.movableheight + (row - 13) * 40
        })
      }
      if (row > 10) {
        this.setData({
          floatheight: 22 + (row - 10) * 1.9,
          caheigth: 22 + (row - 10) * 1.9 - 2
        })
      }
      if (col > 20) {
        this.setData({
          floatwidth: 50 + (col - 20) * 2.25,
          cawidth: 50 + (col - 20) * 2.25 - 2
        })
      }
      for (var i = 0; i < row; i++) {
        seatArr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
          var ss = Math.ceil(Math.random() * col);
          m.num = j;
          m.src = src
          if (ss % j == 1) {
            m.src = "no"
          } else if (ss % j == 3) {
            m.src = "noseat.png"
          } else {
            m.src = src
          }
          seatArr[i][j] = m;
          m = {}
        }
      }
      this.setData({
        seatArr: seatArr
      })
    } else if (options.id == "D") {
      //座位循环
      var row = 30;
      var col = 30;
      var seatArr = new Array(row); //row行
      var src = "seat.png";
      var m = {};
      var s = 0;
      if (row > 13) {
        this.setData({
          movableheight: this.data.movableheight + (row - 13) * 40
        })
      }
      if (row > 10) {
        this.setData({
          floatheight: 22 + (row - 10) * 1.9,
          caheigth: 22 + (row - 10) * 1.9 - 2
        })
      }
      if (col > 20) {
        this.setData({
          floatwidth: 50 + (col - 20) * 2.25,
          cawidth: 50 + (col - 20) * 2.25 - 2
        })
      }
      for (var i = 0; i < row; i++) {
        seatArr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
          var ss = Math.ceil(Math.random() * col);
          m.num = j;
          m.src = src
          if (ss % j == 1) {
            m.src = "no"
          } else if (ss % j == 3) {
            m.src = "noseat.png"
          } else {
            m.src = src
          }
          seatArr[i][j] = m;
          m = {}
        }
      }
      this.setData({
        seatArr: seatArr
      })
    } else {
      //座位循环
      var row = 30;
      var col = 40;
      var seatArr = new Array(row); //row行
      var src = "seat.png";
      var m = {};
      var s = 0;
      if (row > 13) {
        this.setData({
          movableheight: this.data.movableheight + (row - 13) * 40
        })
      }
      if (row > 10) {
        this.setData({
          floatheight: 22 + (row - 10) * 1.9,
          caheigth: 22 + (row - 10) * 1.9 - 2
        })
      }
      if (col > 20) {
        this.setData({
          floatwidth: 50 + (col - 20) * 2.25,
          cawidth: 50 + (col - 20) * 2.25 - 2
        })
      }
      for (var i = 0; i < row; i++) {
        seatArr[i] = new Array(col);
        for (var j = 0; j < col; j++) {
          var ss = Math.ceil(Math.random() * col);
          m.num = j;
          m.src = src
          if (ss % j == 1) {
            m.src = "no"
          } else if (ss % j == 3) {
            m.src = "noseat.png"
          } else {
            m.src = src
          }
          seatArr[i][j] = m;
          m = {}
        }
      }
      this.setData({
        seatArr: seatArr
      })
    }
    console.log(this.data.floatwidth)
    console.log(this.data.floatheight)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  //选择座位
  bindGetLocation: function(e) {
    var that = this;
    var seatsrc = e.currentTarget.dataset.src;
    var seledata = {
      x: e.currentTarget.dataset.x + 1,
      y: e.currentTarget.dataset.y,
    }
    var src = 'seatArr[' + e.currentTarget.dataset.x + '][' + e.currentTarget.dataset.y + '].src'
    if (seatsrc == "seat.png") {
      //console.log(e)
      if (that.data.selectArr.length < 4) {
        var arr = new Array();
        if (that.data.selectArr.length == 0) {
          arr.push(seledata)
        } else {
          arr = that.data.selectArr;
          arr.push(seledata)
        }
        that.setData({
          [src]: "select.png",
          selectArr: arr,

        })
        wx.showToast({
          title: (e.currentTarget.dataset.x + 1) + '排 ' + e.currentTarget.dataset.y + "座",
          icon: 'none'
        })
      } else {
        wx.showToast({
          title: '每人限购四张门票',
          icon: 'none'
        })
      }

    } else if (seatsrc == "select.png") {
      let arr = new Array();
      arr = that.data.selectArr;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].x == seledata.x && arr[i].y == seledata.y) {
          arr.splice(i, 1);
        }
      }
      that.setData({
        [src]: "seat.png",
        selectArr: arr,
      })

    } else if (seatsrc == "noseat.png") {
      wx.showToast({
        title: "换个座位试试吧",
        icon: "none"
      })
    }
  },
  //显示弹窗
  bindShowSeat: function(e) {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  //关闭弹窗
  togglePopup() {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  //删除门票
  binddelete: function(e) {
    var that = this;
    let arrys = that.data.seatArr;
    let arr = new Array();
    arr = that.data.selectArr;
    arr.splice(e.currentTarget.dataset.index, 1);
    arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src = "seat.png";
    that.setData({
      seatArr: arrys,
      selectArr: arr
    })
    if (arr.length == 0) {
      that.setData({
        isShow: false
      });
    }
  },
  //移动结束
  touchend: function(e) {
    let that = this;
    timer = setTimeout(function() {
      that.setData({
        isHidden: true
      })
    }, 3500)
  },
  //横向移动
  onChange: function(e) {
    clearTimeout(timer);
    if (this.data.scale == 1.3) {
      console.log(this.data.floatwidth / 50)
      console.log(e)
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.2,
        top: 10 + Math.abs(e.detail.y),
        isHidden: false
      })
    } else if (this.data.scale >= 1.4 && this.data.scale <= 1.5) {
      console.log('aaa')
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.25,
        top: 10 + Math.abs(e.detail.y) * 0.9,
        isHidden: false
      })
    } else if (this.data.scale >= 1.6 && this.data.scale <= 1.7) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.4,
        top: 10 + Math.abs(e.detail.y) * 0.8,
        isHidden: false
      })
    } else if (this.data.scale >= 1.8 && this.data.scale <= 1.9) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.43,
        top: 10 + Math.abs(e.detail.y) * 0.7,
        isHidden: false
      })
    } else if (this.data.scale >= 2.0 && this.data.scale <= 2.2) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.41,
        top: 10 + Math.abs(e.detail.y) * 0.6,
        isHidden: false
      })
    } else if (this.data.scale >= 2.3 && this.data.scale <= 2.4) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.5,
        top: 10 + Math.abs(e.detail.y) * 0.5,
        isHidden: false
      })
    } else if (this.data.scale >= 2.5 && this.data.scale <= 2.7) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.37,
        top: 10 + Math.abs(e.detail.y) * 0.45,
        isHidden: false
      })
    } else {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.35,
        top: 10 + Math.abs(e.detail.y) * 0.38,
        isHidden: false
      })
    }

  },
  //放大比例
  onScale: function(e) {
    console.log(e.detail.scale)
    let num = (e.detail.scale - 1.2) * 10
    if (e.detail.scale <= 1.9) {
      this.setData({
        cawidth: 55 - num,
        caheigth: 280 - num * 10,
        scale: e.detail.scale
      })
    } else if (e.detail.scale >= 2.0 && e.detail.scale <= 2.4) {
      let nums = (e.detail.scale - 2.0) * 20
      this.setData({
        cawidth: 28 - nums,
        caheigth: 180 - nums * 10,
        scale: e.detail.scale
      })

    } else if (e.detail.scale >= 2.5 && e.detail.scale <= 2.6) {
      this.setData({
        cawidth: 20,
        caheigth: 140,
        scale: e.detail.scale
      })
    } else {
      this.setData({
        cawidth: 20,
        caheigth: 120,
        scale: e.detail.scale
      })

    }
  }

})
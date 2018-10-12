Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

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
  bindscale: function(e) {
    console.log(e)
  },
  bindPress:function(e){
    console.log(e)
    wx.showToast({
      title: '正在加载'+ e.currentTarget.dataset.id+'区',
      icon: 'loading',
    })
    setTimeout(function () {
      wx.navigateTo({
        url: '../seat/seat?id=' + e.currentTarget.dataset.id,
      })
    }, 1500)
  }

})
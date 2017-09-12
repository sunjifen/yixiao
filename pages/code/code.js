// pages/code/code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var id = options.id
    var that = this
    that.getBusinessDetail(id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getBusinessDetail: function (id) {
    var that = this
    wx.request({
      url: 'https://mmx.xinyuanmmx.com/yixiao/index.php/web/business/getBusinessDetail', //仅为示例，并非真实的接口地址
      data: {
        id:id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        wx.setStorage({
          key: "userInfo",
          data: res.data.data
        })
        // if (res.data.code == 0) {
        //   console.log(res.data.data)
        //   var businessDetail = res.data.data
        //   that.setData({
        //     businessDetail2: businessDetail
        //   })
        // } else {
        //   console.log(返回错误)
        // }
      }
    })
  }

})
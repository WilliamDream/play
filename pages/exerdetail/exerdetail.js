// pages/exerdetail/exerdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exerdetail:{
      title: "暑假篮球少年体验班", exerienceId: 1, agegroup: "6-12", date: "2019-7-10至2019-8-25", address:
        "南油第三小学体育馆", club: "天天体育俱乐部", imgurl: "images/tyk/tylq01.jpg", type: 1, fee: 0.0,
      imgs: "", content: "", descimgs: [
        { index: 1, imgurl: "images/tyk/tylq01.jpg" },
        { index: 2, imgurl: "images/tyk/tylq02.jpg" },
        { index: 3, imgurl: "images/tyk/tylq03.jpg" },
      ]
    },
    
    


  },

  // 图片预览
  img: function (e) {
    var that = this;
    var all_pic = [];
    var url = e.currentTarget.dataset.url
    console.log("点击的url：", e);
    for (var i = 0; i < that.data.exerdetail.descimgs.length; i++) {
      var imgs = that.data.exerdetail.descimgs[i].imgurl
      all_pic.push(imgs)
    }

    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: all_pic // 需要预览的图片http链接列表
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})
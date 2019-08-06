var app = getApp()

Page({
  data: {
    allsports: [
      {
        name: "球类运动", typeId: 1, sports: [
          { name: "篮球", sportId: 1, imgurl: "images/sports/basketball.png" },
          { name: "足球", sportId: 2, imgurl: "images/sports/football.png" },
          { name: "乒乓球", sportId: 3, imgurl: "images/sports/pingpong.png" },
          { name: "羽毛球", sportId: 4, imgurl: "images/sports/badminton.png" },
          { name: "网球", sportId: 5, imgurl: "images/sports/tennisball.png" },
          { name: "排球", sportId: 6, imgurl: "images/sports/volleyball.png" },
          { name: "乒乓球", sportId: 3, imgurl: "images/sports/pingpong.png" },
          { name: "羽毛球", sportId: 4, imgurl: "images/sports/badminton.png" },
          { name: "网球", sportId: 5, imgurl: "images/sports/tennisball.png" },
          { name: "排球", sportId: 6, imgurl: "images/sports/volleyball.png" },
        ]
      },
      {
        name: "水上运动", typeId: 2, sports: [
          { name: "游泳", sportId: 7, imgurl: "images/sports/swimming.png" },
          { name: "冲浪", sportId: 8, imgurl: "images/sports/surf.png" },
          { name: "帆船", sportId: 9, imgurl: "images/sports/sailboat.png" }
        ]
      },
      {
        name: "拳击散打", typeId: 2, sports: [
          { name: "拳击", sportId: 12, imgurl: "images/sports/boxing.png" },
          { name: "跆拳道", sportId: 12, imgurl: "images/sports/taekwondo.png" },
        ]
      },
      {
        name: "极限运动", typeId: 2, sports: [
          { name: "轮滑", sportId: 10, imgurl: "images/sports/skidding.png" },
          { name: "滑板", sportId: 11, imgurl: "images/sports/skateboard.png" },
        ]
      },
      {
        name: "益智类", typeId: 2, sports: [
          { name: "国际象棋", sportId: 12, imgurl: "images/sports/internat_chess.png" },
          { name: "围棋", sportId: 12, imgurl: "images/sports/weiqi.png" },
        ]
      }



    ]
  },

  /**
   * 打开体验详情页面
   */
  showExerience: function(e){
    var data = e.currentTarget.dataset
    
    app.globalData.currentCateType = { sportId: data.sportId }
    console.log(data);
    wx.navigateTo({
      url: "../exeriences/exeriences"
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
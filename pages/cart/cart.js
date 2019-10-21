// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    hasList: true,
    status: true,
    totalPrice: 0
  },

  getTotalPrice() {
    let carts = this.data.carts, total = 0;
    // carts.foreach(item => {
    //   if (item.selected)
    //   total += item.price * item.num;
    // });
    for (let i = 0; i < carts.length; i++) {
      var item = carts[i];
      if (item.selected)
        total += item.price * item.num;
    }
    this.setData({totalPrice: total.toFixed(2)});
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
    this.setData({
      carts: [
        { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
        { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
      ]});
    this.getTotalPrice();
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

  selectList() {

  },
  addCount() {

  },
  minusCount() {

  },
  deleteList(index) {
    var carts = this.get('carts');
  },
  selectAll() {
    var status = this.data.status;
    this.setData({status: !status});
  }
})
Template.tradingList.helpers({
  trading: function() {
    return Router.current().data();
  },
  getTrdNo: function() {
    return {_id: this._id};
  }
});

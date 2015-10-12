Template.userItemList.helpers({
  trading: function() {
    return this;
  },
  getItemName: function() {
    return {name: this.slug};
  },
  count: function() {
    var bidderCount = this.bidders.length;
    if (bidderCount < 1) {
      return 'Bid';
    }

    return bidderCount;
  },
});

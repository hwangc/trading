Template.buyerShow.helpers({
  buyers: function() {
    // this data context from router for buyerShow template
    return this;
  },
  count: function() {
    return this.count();
  }
});

Template.buyerShow.events({
  "click .trd-buttons__bidding": function(event, template){
    // show user items
      // select item(s)
      // if no items, show the input box
    
  }
});

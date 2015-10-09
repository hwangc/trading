Template.buyerShow.helpers({
  buyers: function() {
    // this data( cursor )context from router for buyerShow template
    return this;
  },
  count: function() {
    var bidderCount = this.count();
    if (bidderCount < 1) {
      return 'Please bid for the item';
    }
    return bidderCount;
  }
});

Template.buyerShow.events({
  "click .trd-buttons__bidding": function(event, template) {

    var $target = $(event.target);
    // check if the button is already clicked
    if( $target.hasClass("trd-buttons__bidding--on") ) {
      // remove the my item
      removeViewById('trd-my-item');
      // remove the class flag
      $target.toggleClass("trd-buttons__bidding--on active");

    } else {
      // set the active flag
      $target.addClass("trd-buttons__bidding--on active");
      // show user Array items
      var buyerItem = Trading.find({userID: Meteor.userId()});
      // render a template with the data and insert it to buyer panel
      Blaze.renderWithData( Template.myItems, buyerItem, template.find(".trd-my-items"));
      // submit
      // if no items, show the input box
    }
  }
});

Template.myItems.helpers({
  myItems: function(){
    return this;
  }
});

Template.myItems.events({
  "click .trd-submit__button": function(event, template) {

    event.preventDefault();

    // get the view obj
    var itemShowView = getViewById('trd-item-show');
    // get the item show data
    var itemData = Blaze.getData(itemShowView);
    // get the item id
    var selectedItemID = $("#trd-my-item").val();
    // set the bidder info
    var bidder = { userID: Meteor.userId(), itemID: selectedItemID };
    // Update the trading item with the bidder info
    var result = Trading.update(
      { _id: itemData._id },
      { $addToSet: { bidders: bidder } }
    );
    // remove my item view
    removeViewById('trd-my-item');
    // remove the class flag
    $(".trd-buttons__bidding").removeClass("trd-buttons__bidding--on active");
  }
});

var getViewById = function(selector) {
  // get the item show element
  var el = document.getElementById(selector);
  // return the item show view
  return Blaze.getView(el);
}

var removeViewById = function(selector) {
  var view = getViewById(selector);
  Blaze.remove(view);
}

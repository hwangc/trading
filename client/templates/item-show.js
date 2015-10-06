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

    var $target = $(event.target);
    // check if the button is already clicked
    if( $target.hasClass("trd-buttons__bidding--on") ) {
      var myItemViewEl = document.getElementById('trd-my-item');
      // get the my item view
      var myItemView = Blaze.getView(myItemViewEl);
      // remove the my item
      Blaze.remove(myItemView);
      // remove the class flag
      $target.removeClass("trd-buttons__bidding--on active");

    } else {
      // set the flag
      $target.addClass("trd-buttons__bidding--on active");
      // show user Array items
      var buyerItem = Trading.find({userID: Meteor.userId()});
      // make a template with the data and insert it to buyer panel
      Blaze.renderWithData( Template.myItems, buyerItem, template.find('.trd-my-items'));
      // select item(s)
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

Template.trading.helpers({
  trading: function() {
    return Router.current().data();
  }
});

Template.trading.events({
  "submit .trd-submit": function(event) {
    // Prevent default form submit
    event.preventDefault();
    var title = '',desc = '';
    // get the title
    title = event.target.children["trd-submit__title"].value;
    // get the description
    desc = event.target.children["trd-submit__description"].value;
    // save them to Trading Collection
    if(title && desc){
      Trading.insert({
        profileImg: "img/user-50x50.png",
        itemTitle: title,
        itemDescription: desc,
        bidderCount: 0,
        progress: "unchecked",
        createdAt: new Date(),
      });
    }
  },
  "click .trd-button__remove": function (event) {
    // remove the item
    // this is the data context of the trading
    Trading.remove({_id:this._id});
  }
});

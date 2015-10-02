Template.trading.helpers({
  trading: function() {
    return Router.current().data();
  }
});

Template.trading.events({
  "submit #trading-submit__form": function(event) {

    // Prevent default form submit
    event.preventDefault();

    var title = '',
        desc = '';

    // get the title
    title = event.target.children["trading-item-title"].value;
    // get the description
    desc = event.target.children["trading-item-description"].value;
    // save them to Trading Collection
    if(title && desc){
      Trading.insert({
        user_profile_img: "img/user-50x50.png",
        item_title: title,
        item_description: desc,
        bidder_count: 0,
        trading_progress: "unchecked",
        createdAt: new Date(),
      });
    }
  }
});

dataReadyHold = null;
if(Meteor.isClient){
  dataReadyHold = LaunchScreen.hold();
}
// Trading Controller
TradingController = RouteController.extend({
  layoutTemplate: "trading",
  loadingTemplate: "loading",
  waitOn:function(){
    return [
      Meteor.subscribe("trading")
    ]
  }
})

// Item List Controller
ItemListController = TradingController.extend({
  onBeforeAction: function() {
    if( this.ready() ) {
      dataReadyHold.release();
      this.next();
    }
  },
  action: function() {
    this.render('itemList', {
      data:function(){
        return Trading.find({},{sort:{createdAt:-1}});
      }
    });
    this.render('submit', {to: 'submit-show'});
  }
});

// Item Show Controller
ItemShowController = TradingController.extend({
  data: function() {
    return Trading.findOne({slug: this.params.name});
  },
  action: function() {
    this.render('buyerShow', {
      to: 'buyer-show',
      data: function() {
        var bidders = Trading.findOne({slug: this.params.name}, {fields: { bidders:1 }}).bidders;
        var userIDs = _.pluck(bidders, 'userID');
        var itemIDs = _.pluck(bidders, 'itemID');
        return Trading.find({_id: {$in: itemIDs}, userID: {$in: userIDs}});
      }
    });
    this.render('itemShow');
  }
});

// Trading Route
Router.route("trading", {
  path: "/",
  controller: "ItemListController",

});

// ItemShow Route
Router.route("itemShow", {
  path: "/item/:name"
});

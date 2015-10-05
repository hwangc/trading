// Trading Controller
TradingController = RouteController.extend({
  layoutTemplate: "trading",
  loadingTemplate: "loading",
  waitOn:function(){
    return Meteor.subscribe("trading");
  }
})

// Item List Controller
ItemListController = TradingController.extend({
  data:function(){
    return Trading.find({},{sort:{createdAt:-1}});
  },
  yieldRegions: {
    'trdSubmit': {to: 'trd-submit'},
    'itemList': {}
  }
});

// Item Show Controller
ItemShowController = TradingController.extend({
  data:function(){
    // Find one with the itemId
    return Trading.findOne({_id: Session.get("itemID")});
  },
  yieldRegions: {
    'buyerShow': { to: 'buyer-show' },
    'itemShow': {}
  }
});

// Trading Route
Router.route("trading", {
  path: "/",
  controller: "ItemListController"
});

// ItemShow Route
Router.route("itemShow", {
  path: "/item/:name"
});

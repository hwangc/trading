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
  }
});
// Item Show Controller
ItemShowController = TradingController.extend({
  data:function(){
    // Find one with the itemId
    return Trading.findOne({_id: Session.get("itemID")});
  }
});

Router.route("trading", {
  path: "/",
  controller: "ItemListController",
  action:function(){
    this.render("itemList");
  }
});

Router.route("itemShow", {
  path: "/item/:name"
});

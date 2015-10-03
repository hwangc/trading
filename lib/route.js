TradingController = RouteController.extend({
  layoutTemplate: "trading",
  loadingTemplate: "loading",
  waitOn:function(){
    return Meteor.subscribe("trading");
  }
})

TradingListController = TradingController.extend({
  data:function(){
    return Trading.find({},{sort:{createdAt:-1}});
  }
});

ItemShowController = TradingController.extend({
  data:function(){
    return Trading.findOne({_id: this.params._id});
  }
});

Router.route("tradingList", {
  path: "/",
  controller: "TradingListController"
});

Router.route("/item/:_id", {
  path: "/item/:_id",
  name: "item.show",
  controller: "ItemShowController"
});

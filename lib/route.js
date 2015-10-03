TradingController = RouteController.extend({
  layoutTemplate: "trading",
  loadingTemplate: "loading"
})

HomeController = TradingController.extend({

  waitOn:function(){
    return Meteor.subscribe("trading");
  },
  data:function(){
    return Trading.find({},{sort:{createdAt:-1}});
  },
  action: function() {
    this.render();
  }
});

Router.route("/", {
  path: "/",
  name: "home"
});

Router.route("/item/:_id", {
  path: "/item/:_id",
  name:"item.show",
  // template:"itemShow",
  waitOn:function(){
    // subscriptions
  },
  data:function(){
    //  dataFunction
    return {_id:1};
  },
  action:function() {
    this.render();
  }
});

// Trading Controller
TradingController = RouteController.extend({
  layoutTemplate: "trading",
  loadingTemplate: "loading",
  waitOn:function(){
    return [
      Meteor.subscribe("trading"),
      Meteor.subscribe("buyers")
    ]
  }
})

// Item List Controller
ItemListController = TradingController.extend({
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
  action: function() {
    this.render('buyerShow', {
      to: 'buyer-show',
      data: function(){
        return Trading.find({});
      }
    });
    this.render('itemShow', {
      data: function(){
        return Trading.findOne({_id: Session.get("itemID")});
      }
    })
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

Router.route("/", {
  path: "/",
  name:"home",
  layoutTemplate:"trading",
  loadingTemplate: "loading",

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

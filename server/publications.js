Meteor.publish("trading", function(){
  return Trading.find({});
});

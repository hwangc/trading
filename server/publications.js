Meteor.publish("trading", function(){
  return Trading.find({});
});
Meteor.publish("traders", function(userId){
  if(userId) {
    return Meteor.users.find({_id: userId});
  }
});

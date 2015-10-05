Meteor.publish("trading", function(){
  return Trading.find({});
});

Meteor.publish("buyers", function(){
  // user id
  // user items
  // user email
  // user name
  // user createdAt
  // profile
  // services
  return Buyers.find({});
});

Trading = new Mongo.Collection("trading");
Trading.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
Trading.initEasySearch(['itemName', 'itemDescription'], {
    'limit' : 10,
    // 'use' : 'minimongo'
    'use' : 'mongo-db'
});

Traders = new Mongo.Collection("traders");
Traders.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

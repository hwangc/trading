Template.trading.helpers({
  getUserId: function() {
    return {id: Meteor.userId()};
  }
});
Template.trading.events({
  "submit .trd-submit": function(event, template) {
    // Prevent default form submit
    event.preventDefault();

    // check if user logged in
    if( !Meteor.user()) {
      return alert("Please sign in or create an account to submit an item.");
    }

    var title = '',desc = '', tags = [], cat = '', docId = '';
    // get the title
    title = template.$(".trd-submit__title").val();
    // get the description
    desc = template.$(".trd-submit__description").val();
    // set a cat object
    cat = Session.get("selectedCat");
    // get the sub category
    tags = Session.get("tags");
    // save them to Trading Collection
    if(title && desc){
      docId = Trading.insert({
        userID: Meteor.userId(),
        profileImg: Meteor.absoluteUrl("img/user-50x50.png"),
        itemName: title,
        itemDescription: desc,
        category: cat,
        tags: tags,
        slug: strToURL(title),
        bidderCount: 0,
        progress: "unchecked",
        createdAt: new Date(),
        bidders: []
      });
    }
    try {
      if(docId){
        // Empty the input values
        template.$(".trd-submit__title").val('');
        template.$(".trd-submit__description").val('');
        // close the category box
        Session.set("catSel", false);
      } else {
        throw "Sorry, it hasn't added.";
      }
    } catch (e) {
      console.error(e);
    } finally {

    }
  },
  "click .trd-button__remove": function (event) {
    // remove the item
    // this is the data context of the trading
    Trading.remove({_id:this._id});
  },
  "click .trd-header__title-link": function (event, template) {
    template.$(".trd-submit__title").val('');
    template.$(".trd-submit__description").val('');
  }
});

Template.trading.events({
  "submit .trd-submit": function(event) {
    // Prevent default form submit
    event.preventDefault();

    // check if user logged in
    if( !Meteor.user()) {
      return alert("Please sign in or create an account to submit an item.");
    }

    var title = '',desc = '', docId = '';
    // get the title
    title = $(event.target).find(".trd-submit__title").val();
    // get the description
    desc = $(event.target).find(".trd-submit__description").val();
    // save them to Trading Collection
    if(title && desc){
      docId = Trading.insert({
        userID: Meteor.userId(),
        profileImg: Meteor.absoluteUrl("img/user-50x50.png"),
        itemName: title,
        itemDescription: desc,
        bidderCount: 0,
        progress: "unchecked",
        createdAt: new Date(),
      });
    }
    try {
      if(docId){
        // Empty the input values
        $(event.target).find(".trd-submit__title").val('');
        $(event.target).find(".trd-submit__description").val('');
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
  "click .trd-header__title-link": function () {
    $(".trd-submit__title").val('');
    $(".trd-submit__description").val('');
  }
});

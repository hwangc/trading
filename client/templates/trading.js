Template.trading.events({
  "submit .trd-submit": function(event) {
    // Prevent default form submit
    event.preventDefault();
    var title = '',desc = '',id = '';
    // get the title
    title = $(event.target).find(".trd-submit__title").val();
    // get the description
    desc = $(event.target).find(".trd-submit__description").val();
    // save them to Trading Collection
    if(title && desc){
      id = Trading.insert({
        profileImg: "img/user-50x50.png",
        itemName: title,
        itemDescription: desc,
        bidderCount: 0,
        progress: "unchecked",
        createdAt: new Date(),
      });
    }
    try {
      if(id){
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
  }
});

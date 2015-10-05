Template.itemList.helpers({
  trading: function() {
    // this data context from router for itemList template
    // To iterate over an array or database cursor, use {{#each}}:
    // this is a database cursor
    return this;
  },
  getItemName: function() {
    var name_slug = '';
    name_slug = strToURL(this.itemName);
    return {name: name_slug};
  }
});

Template.itemList.events({
  // Set the item uri id in the itemID
  "click .trd-meta__title-link": function(){
    Session.set("itemID", this._id);
  }
});

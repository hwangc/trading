Template.itemList.helpers({
  trading: function() {
    return Router.current().data();
  },
  getItemName: function() {
    var name_uri = '';
    name_uri = this.itemName;
    // trim the leading and trailing spaces
    name_uri = name_uri.replace(/^\s+|\s+$/g,'')
    // convert spaces to '-'
    name_uri = name_uri.replace(/ /g, "-");
    // Make lowercase
    name_uri = name_uri.toLowerCase();
    // Remove characters that are not alphanumeric or a '-'
    name_uri = name_uri.replace(/[^a-z0-9-]/g, "");
    // Combine multiple dashes (i.e., '---') into one dash '-'.
    name_uri = name_uri.replace(/[-]+/g, "-");
    
    return {name: name_uri};
  }
});

Template.itemList.events({
  // Set the item uri id in the itemID
  "click .trd-meta__title-link": function(){
    Session.set("itemID",this._id);
  }
});

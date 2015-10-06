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

var strToURL = function(str){
  // trim the leading and trailing spaces
  str = str.replace(/^\s+|\s+$/g,'')
  // convert spaces to '-'
  str = str.replace(/ /g, "-");
  // Make lowercase
  str = str.toLowerCase();
  // Remove characters that are not alphanumeric or a '-'
  str = str.replace(/[^a-z0-9-]/g, "");
  // Combine multiple dashes (i.e., '---') into one dash '-'.
  str = str.replace(/[-]+/g, "-");

  return  str;
}

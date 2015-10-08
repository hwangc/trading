Template.submit.helpers({
  catSel: function(){
    return Session.get("catSel");
  }
});
Template.submit.events({
  "click .trd-submit__cat .btn": function(event, template){
    Session.set("catSel", true);
  }
});

Template.subCategory.helpers({
  subCat: function() {
    return ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9", "cat10"];
  }
});

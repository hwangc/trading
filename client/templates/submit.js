Template.submit.helpers({
  catSel: function(){
    return Session.get("catSel");
  }
});
Template.submit.events({
  "click .trd-submit__cat .btn": function(event, template){
    // select the category and get the value
    var selectedCat = $(event.target).children("input").val();
    // catSel: category selected and selectedCat: the value of the category
    Session.set({
      "catSel": true,
      "selectedCat": selectedCat
    });
  }
});

Template.subCategory.helpers({
  subCat: function() {
    // subcategory tag array
    var tempTag = {
      product: ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10"],
      service: ["service1", "service2", "service3", "service4", "service5", "service6", "service7", "service8", "service9", "service10"],
      others: ["others1", "others2", "others3", "others4", "others5", "others6", "others7", "others8", "others9", "others10"]
    };

    // select tag from tempTag
    switch (Session.get("selectedCat")) {
      case "product":
        return tempTag.product;
        break;
      case "service":
        return tempTag.service;
        break;
      case "others":
        return tempTag.others;
        break;

      default:
        console.error("no category selected");
        break;
    }
  }
});

Template.subCategory.events({
  "click .trd-subcat__close": function(event, template){
    Session.set("catSel", false);
    // set it autorun when catSel false, remove active class : tracker/submit.js
  },
  "click .trd-subcat__tag": function(event, etemplate) {
    var tags = [];
    // select the cat and its tag
    $(event.target).toggleClass("select");
    $(event.target).parent().find(".select").each(function() {
      tags.push($(this).text());
    });
    Session.set("tags", tags);
  }
});

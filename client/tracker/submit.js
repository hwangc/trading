Tracker.autorun(function(){
  if(Session.equals("catSel", false)) {
    $(".trd-submit__cat .btn").each(function() {
      if($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });
  }
});

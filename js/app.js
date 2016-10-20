$( document ).ready(function() {
  var buttons = $(".buttons");
  var display = $("#screen");
    buttons.on("click", function(event){
      var target = $(event.target);
      if (target.tagName == "span"){
        console.log(target);
      }
    });
});

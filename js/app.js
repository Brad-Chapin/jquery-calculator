$( document ).ready(function() {
  var $buttons = $(".buttons").children();
  for (var i = 0; i < $buttons.length; i++){
    $($buttons[i]).on("click", clicks);
  }
});
function clicks (event){
  var $display = $("#screen");
  var $target = $(event.target);

  switch (true){

  //  if a number is clicked
  case (!isNaN($target.html())):
  console.log("number was clicked!!!");
  $($display).text($display.html() + $target.html());
  break;

// if the clear button is clicked
  case ($target.html() == "C"):
  console.log("clear the input");
  $display.text("");
  break;

// if math is ready to be performed
  case ($target.html() == "="):
  console.log("clicked equal sign");
  $display.text(eval($display.html()));
  break;

  //if + is clicked
  case ($target.html() == "+"):
  console.log("operator was clicked");
  $($display).text($display.html() + "+");
  break;

  //if - is clicked
  case ($target.html() == "-"):
  console.log("operator was clicked");
  $($display).text($display.html() + "-");
  break;

  //if x is clicked
  case ($target.html() == "x"):
  console.log("operator was clicked");
  $($display).text($display.html() + "*");
  break;

  //if ÷ is clicked
  case ($target.html() == "÷"):
  console.log("operator was clicked");
  $($display).text($display.html() + "/");
  }
};

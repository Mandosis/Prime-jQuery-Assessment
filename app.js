var clickNum = 1;

$(function() {
  // Add generate button on page load
  $("body").append("<button id=\"gen\">generate</button>");

  // Listen for generate button
  $("#gen").click(function() {
    addContainer();
  });

  // Listen for delete button

});

function addContainer() {
  var change = false;

  $("body").append("<div style=\"background: yellow\"><p>" + clickNum +"</p><button id=\"delete" + clickNum + "\">delete</button><button id=\"change" + clickNum + "\">change</button></div>");

  // Listen for delete button
  $("#delete" + clickNum).click(function() {
    $(this).parent().remove();
  });

  // Listen for change button
  $("#change" + clickNum).click(function() {
    if (change == false) {
      change = true;
      $(this).parent().css("background", "red");
    } else {
      $(this).parent().css("background", "yellow");
      change = false;
    }
  });

  clickNum++;
}

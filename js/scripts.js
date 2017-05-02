// back-end
var leapYear = function(x) {
  if ((x % 4 === 0)  && (x % 100 !== 0) || (x % 400 === 0)) {
    return true;
  } else {
    return false;
  }

};

// front-end
$(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    // $("#result").text(result);

    $(".year").text(year);

    if (!result) { //same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});

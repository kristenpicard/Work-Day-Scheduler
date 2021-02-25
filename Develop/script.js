// Displays current day and date using moment.
var currentDate = moment().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate);

// Variable to get the # of hours at the current time.
  var now = new Date().getHours();
// Displays color depending on whether the current time (var now) is in the past, present or future.
  function colorCode() {
    for (i=0; i <= 9; i++) {
      if (now > i + 8) {
        $(`#text-${i + 8}`).addClass("past");
      } else if (now === (i + 8)) {
        $(`#text-${i + 8}`).addClass("present");
      } else {
        $(`#text-${i + 8}`).addClass("future");
      }
    }};



colorCode();
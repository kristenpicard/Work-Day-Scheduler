// Displays current day and date using moment.
var currentDate = moment().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate);

// Variable to get the # of hours at the current time.
var now = new Date().getHours();
// Displays color depending on whether the current time (var now) is in the past, present or future.
function colorCode() {
  for ( i = 0; i <= 9; i++) {
    if (now > i + 8) {
      $(`#text-${i + 8}`).addClass("past");
    } else if (now === (i + 8)) {
      $(`#text-${i + 8}`).addClass("present");
    } else {
      $(`#text-${i + 8}`).addClass("future");
    }
  }
};



// Function runs when a save button is clicked. 
$(".saveBtn").on("click", function (){
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time, text);
});

// Get the value at the html element that holds user input text from local storage if any
$("#text-8").val(localStorage.getItem("time-block"));
$("#text-9").val(localStorage.getItem("time-block"));
$("#text-10").val(localStorage.getItem("time-block"));
$("#text-11").val(localStorage.getItem("time-block"));
$("#text-12").val(localStorage.getItem("time-block"));
$("#text-13").val(localStorage.getItem("time-block"));
$("#text-14").val(localStorage.getItem("time-block"));
$("#text-15").val(localStorage.getItem("time-block"));
$("#text-16").val(localStorage.getItem("time-block"));
$("#text-17").val(localStorage.getItem("time-block"));


colorCode();


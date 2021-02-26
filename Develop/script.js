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

// Figured out how to save for first time block.  Want to be able to do this for each one wil a loop?
// function eightOclock() {
//   var input = document.querySelector("#text-8");
//   var output = document.querySelector("#text-8");
//   var save = document.querySelector("#bttn-8");
//   save.addEventListener("click", updateOutput);
//   input.value = localStorage.getItem("");
//   output.textContent = localStorage.getItem("");
  
//   function updateOutput() {
//     localStorage.setItem("", input.value);
//     output.textContent = input.value;
//   }
// };
// eightOclock();

// function nineOclock() {
//   var input = document.querySelector("#text-9");
//   var output = document.querySelector("#text-9");
//   var save = document.querySelector("#bttn-9");
//   save.addEventListener("click", updateOutput);
//   input.value = localStorage.getItem("");
//   output.textContent = localStorage.getItem("");
  
//   function updateOutput() {
//     localStorage.setItem("", input.value);
//     output.textContent = input.value;
//   }
// };
// nineOclock();


// Get the value at the html element #text-8 from local storage if any?
$("#text-8").val(localStorage.getItem("time-block"));

// Know I need an on click function to setItem if the save button at a certain block is clicked..
$(".saveBtn").on("click", function (){
var time = $(this).parent().attr("id");
// Get value at "description" within my textarea tag
var text = $(this).siblings(".description").val();
// Save text in local storage
localStorage.setItem(time, text);
});


colorCode();


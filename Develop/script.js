// Displays current day and date.
var currentDate = moment().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate);
  
  var now = new Date().getHours();
  console.log(now);




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

  //   if (now > 8) {
  //     $("#textEight").addClass("past");
  //   } else if (now >= 8 && now < 9) {
  //     $("#textEight").addClass("present");
  //   } else if (now < 8) {
  //     $("#textEight").addClass("future");
  //   }
  //   if (now > 9) {
  //     $("#textNine").addClass("past");
  //   } else if (now >= 9 && now < 10) {
  //     $("#textNine").addClass("present");
  //   } else if (now < 9) {
  //     $("#textNine").addClass("future");
  //   }
  //   if (now > 10) {
  //     $("#textTen").addClass("past");
  //   } else if (now >= 10 && now < 11) {
  //     $("#textTen").addClass("present");
  //   } else if (now < 10) {
  //     $("#textTen").addClass("future");
  //   }
  //   if (now > 11) {
  //     $("#textEleven").addClass("past");
  //   } else if (now >= 11 && now < 12) {
  //     $("#textEleven").addClass("present");
  //   } else if (now < 11) {
  //     $("#textEleven").addClass("future");
  //   }
  //   if (now > 12) {
  //     $("#textTwelve").addClass("past");
  //   } else if (now >= 12 && now < 13) {
  //     $("#textTwelve").addClass("present");
  //   } else if (now < 12) {
  //     $("#textTwelve").addClass("future");
  //   }
  //   if (now > 13) {
  //     $("#textOne").addClass("past");
  //   } else if (now >= 13 && now < 14) {
  //     $("#textOne").addClass("present");
  //   } else if (now < 13) {
  //     $("#textOne").addClass("future");
  //   }
  //   if (now > 14) {
  //     $("#textTwo").addClass("past");
  //   } else if (now >= 14 && now < 15) {
  //     $("#textTwo").addClass("present");
  //   } else if (now < 14) {
  //     $("#textTwo").addClass("future");
  //   }
  //   if (now > 15) {
  //     $("#textThree").addClass("past");
  //   } else if (now >= 15 && now < 16) {
  //     $("#textThree").addClass("present");
  //   } else if (now < 15) {
  //     $("#textThree").addClass("future");
  //   }
  //   if (now > 16) {
  //     $("#textFour").addClass("past");
  //   } else if (now >= 16 && now < 17) {
  //     $("#textFour").addClass("present");
  //   } else if (now < 16) {
  //     $("#textFour").addClass("future");
  //   }
  //   if (now > 17) {
  //     $("#textFive").addClass("past");
  //   } else if (now >= 17 && now < 18) {
  //     $("#textFive").addClass("present");
  //   } else if (now < 17) {
  //     $("#textFive").addClass("future");
  //   }
  // };

colorCode();
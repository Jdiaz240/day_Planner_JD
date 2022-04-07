var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

// $(document).ready(function() {
//     $(".saveBtn").on("click", function())
//     var value = $(this).sibling(".information").val();
//     var time = $(this).parent().attr("id");
//     localStorage.setItem(time, value)
// })

// function colorUpdater() {
// var currentHour = moment().hours();

//     $(".time-block").each(function() {
//     var blockTime =
//     })
//     if (blockTime < currentHour) {

//     } else if () {

//     } else {

//     }
// }

// function colorUpdater() {
// var now = new Date().getHours();

//     if (now > 9) {
//         $("#9AM").addClass("past");
//     }   else if (now >= 9 && now < 10) {
//             $("#9AM").addClass("present");
//         } else {
//             $("9AM").addClass("future");
//         }
// };

// colorUpdater();

// var interval = setInterval(colorUpdater, 15000);

// $("#hour-nine .information").val(localStorage.getItem("hour-nine"));

// $("#currentDay").text(moment().format("MMM Do YYYY"));

// });
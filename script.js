var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

// $(document).ready(function() {
//     $(".saveBtn").on("click", function())
//     var value = $(this).sibling(".information").val();
//     var time = $(this).parent().attr("id");
//     localStorage.setItem(time, value)
// })

function colorUpdater() {
var currentHour = moment().hours();

$(".time-block").each(function() {

    if (currentHour > 9) {
        $("#hour-nine").addClass(".past");
    }   else if  (currentHour >= 9 && currentHour < 10) {
        $("#hour-nine").addClass(".present");
        } else {
        $("#hour-nine").addClass(".future");
        }
    

    if (currentHour > 10) {
        $("#hour-ten").addClass(".past");
    }   else if  (currentHour >= 9 && currentHour < 10) {
        $("#hour-ten").addClass(".present");
        } else {
        $("#hour-ten").addClass(".future");
        }
    
    
        if (currentHour > 11) {
            $("#hour-eleven").addClass(".past");
        }   else if  (currentHour >= 9 && currentHour < 10) {
            $("#hour-eleven").addClass(".present");
            } else {
            $("#hour-eleven").addClass(".future");
            }
        });

}



    //
    // var blockTime = 
    // })
    // if (blockTime < currentHour) {
    //     .addClass("past");

    // } else if (blockTime > currentHour) {
    //     .addClass("future");

    // } else {
    //     .addClass("present");

    // }

// function colorUpdater() {
// var now = new Date().getHours();
// 

// colorUpdater();

// var interval = setInterval(colorUpdater, 15000);

// $("#hour-nine .information").val(localStorage.getItem("hour-nine"));

// $("#currentDay").text(moment().format("MMM Do YYYY"));
var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY hh:mm:ss a"));
var interval = setInterval(colorUpdater, 1000);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    })
});

function colorUpdater() {
var currentHour = moment().hours();

        if (currentHour > 9) {
        $("#hour-nine").addClass("past");
    }   else if  (currentHour >= 9 && currentHour < 10) {
        $("#hour-nine").addClass("present");
        } else {
        $("#hour-nine").addClass("future");
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
    }   else if  (currentHour >= 10 && currentHour < 11) {
        $("#hour-eleven").addClass(".present");
        } else {
        $("#hour-eleven").addClass(".future");
        }

        if (currentHour > 12) {
        $("#hour-twelve").addClass(".past");
    }   else if  (currentHour >= 12 && currentHour < 13) {
        $("#hour-twelve").addClass(".present");
        } else {
        $("#hour-twelve").addClass(".future");
        }
    
        if (currentHour > 1) {
        $("#hour-one").addClass(".past");
    }   else if  (currentHour >= 1 && currentHour < 2) {
        $("#hour-one").addClass(".present");
        } else {
        $("#hour-one").addClass(".future");
        }
 
        if (currentHour > 2) {
        $("#hour-two").addClass(".past");
    }   else if  (currentHour >= 2 && currentHour < 3) {
        $("#hour-two").addClass(".present");
        } else {
        $("#hour-two").addClass(".future");
        }
  
        if (currentHour > 3) {
        $("#hour-three").addClass(".past");
    }   else if  (currentHour >= 3 && currentHour < 4) {
        $("#hour-three").addClass(".present");
        } else {
        $("#hour-three").addClass(".future");
        }
            
        if (currentHour > 4) {
        $("#hour-four").addClass(".past");
    }   else if  (currentHour >= 4 && currentHour < 5) {
        $("#hour-four").addClass(".present");
        } else {
        $("#hour-four").addClass(".future");
        }
        
        if (currentHour > 5) {
        $("#hour-five").addClass(".past");
    }   else if  (currentHour >= 5 && currentHour < 6) {
        $("#hour-five").addClass(".present");
        } else {
        $("#hour-five").addClass(".future");
        }
        

        };





colorUpdater();



$("#hour-nine .information").val(localStorage.getItem("hour-nine"));
$("#hour-ten .information").val(localStorage.getItem("hour-ten"));
$("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
$("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
$("#hour-one .information").val(localStorage.getItem("hour-one"));
$("#hour-two .information").val(localStorage.getItem("hour-two"));
$("#hour-three .information").val(localStorage.getItem("hour-three"));
$("#hour-four .information").val(localStorage.getItem("hour-four"));
$("#hour-five .information").val(localStorage.getItem("hour-five"));

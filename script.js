var time = moment(); //creates variable that displays current time
$("#currentDay").text(time.format("MMM Do, YYYY hh:mm:ss a"));//asigns the currentDay Id to display the current time in the desired format onto the page.
var interval = setInterval(colorUpdater, 1000);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    })
});

function colorUpdater() { //creates a fucntion to change the color of the time blocks as the day goes on 
var currentHour = moment().hours(); //creates a variable so the js will always know what the hour is at time of use.

    //creates and if statement that details the following
        if (currentHour > 9) { //if the time right now is greater than 9
        $("#hour-nine").addClass("past");//than add the css class of past to the class hour-nine
    }   else if  (currentHour >= 9 && currentHour < 10) { //however if current hour is greater than or equal to 9 but still less than 10 
        $("#hour-nine").addClass("present");//add the css class present
        } else { //if neither of the previous parameters are met   
        $("#hour-nine").addClass("future");//then add the class future.
        }
    
    //repeat previous format for all of the follwing if statements.
        if (currentHour > 10) {
        $("#hour-ten").addClass("past");
    }   else if  (currentHour >= 9 && currentHour < 10) {
        $("#hour-ten").addClass("present");
        } else {
        $("#hour-ten").addClass("future");
        }
    
        if (currentHour > 11) {
        $("#hour-eleven").addClass("past");
    }   else if  (currentHour >= 10 && currentHour < 11) {
        $("#hour-eleven").addClass("present");
        } else {
        $("#hour-eleven").addClass("future");
        }

        if (currentHour > 12) {
        $("#hour-twelve").addClass("past");
    }   else if  (currentHour >= 12 && currentHour < 13) {
        $("#hour-twelve").addClass("present");
        } else {
        $("#hour-twelve").addClass("future");
        }
    
        if (currentHour > 1) {
        $("#hour-one").addClass("past");
    }   else if  (currentHour >= 1 && currentHour < 2) {
        $("#hour-one").addClass("present");
        } else {
        $("#hour-one").addClass("future");
        }
 
        if (currentHour > 2) {
        $("#hour-two").addClass("past");
    }   else if  (currentHour >= 2 && currentHour < 3) {
        $("#hour-two").addClass("present");
        } else {
        $("#hour-two").addClass("future");
        }
  
        if (currentHour > 3) {
        $("#hour-three").addClass("past");
    }   else if  (currentHour >= 3 && currentHour < 4) {
        $("#hour-three").addClass("present");
        } else {
        $("#hour-three").addClass("future");
        }
            
        if (currentHour > 4) {
        $("#hour-four").addClass("past");
    }   else if  (currentHour >= 4 && currentHour < 5) {
        $("#hour-four").addClass("present");
        } else {
        $("#hour-four").addClass("future");
        }
        
        if (currentHour > 5) {
        $("#hour-five").addClass("past");
    }   else if  (currentHour >= 5 && currentHour < 6) {
        $("#hour-five").addClass("present");
        } else {
        $("#hour-five").addClass("future");
        }
        

        };





colorUpdater(); //calls the function into action so that it displays on the page.


//this pulls saved items of out the local storage on the page after refresh.
$("#hour-nine .information").val(localStorage.getItem("hour-nine"));
$("#hour-ten .information").val(localStorage.getItem("hour-ten"));
$("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
$("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
$("#hour-one .information").val(localStorage.getItem("hour-one"));
$("#hour-two .information").val(localStorage.getItem("hour-two"));
$("#hour-three .information").val(localStorage.getItem("hour-three"));
$("#hour-four .information").val(localStorage.getItem("hour-four"));
$("#hour-five .information").val(localStorage.getItem("hour-five"));

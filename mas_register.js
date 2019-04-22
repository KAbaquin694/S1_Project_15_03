"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

      Author: Khalel Abaquin
      Date:   4.19.19    
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

//This section of code adds an event listener that loads an anonymous function when the browser loads. The anonymous function calls the 'calcCart' function & runs 4 document methods.
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.querySelectorAll("#fnbox", "#InBox", "#groupBox", "#mailBox", "#phoneBox", "#banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("checkBox").onclick = calcCart;
});

//This block of code creates the 'sessionTest' function. Inside the function is an if statement that creates a custom validity message if the user has not put in the correct information.
function sessionTest() {
      if (sessionBox[i] !== -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      } else {
            sessionBox.setCustomValidity("");
      }
}

//
function calcCart() {
      var confName = "" + document.regForm.firstName.value + " " + document.regForm.lastName.value + "";
      var confGroup = document.regForm.group.value;
      var confMail = document.regForm.email.value;
      var confPhone = document.regForm.phoneNumber.value;
      var confBanquet = document.regForm.banquetGuests.value;
      var confBanquetCost = confBanquet * 55;
      if (sessionBox[i] !== -1) {
            // var confSession = ;
      } else {

      }
}
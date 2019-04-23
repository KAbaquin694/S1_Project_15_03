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

//This section of code adds an event listener that loads an anonymous function when the browser loads. The anonymous function calls the 'calcCart' function & runs 9 document methods.
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.querySelector("#fnbox").onblur = calcCart;
      document.querySelector("#InBox").onblur = calcCart;
      document.querySelector("#groupBox").onblur = calcCart;
      document.querySelector("#mailBox").onblur = calcCart;
      document.querySelector("#phoneBox").onblur = calcCart;
      document.querySelector("#banquetBox").onblur = calcCart;
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

//This function is responsible for calculating the cost of registration & storing the user's information into the session storage via 'if' statements & document methods.
function calcCart() {
      var confName = "" + document.regForm.firstName.value + " " + document.regForm.lastName.value + "";
      var confGroup = document.regForm.group.value;
      var confMail = document.regForm.email.value;
      var confPhone = document.regForm.phoneNumber.value;
      var confBanquet = document.regForm.banquetGuests.value;
      var confBanquetCost = confBanquet * 55;
      //This section executes two different blocks of code depending if the codition is met or not.
      if (sessionBox.selecedIndex !== -1) {
            var confSession = sessionBox[sessionBox.selectedIndex].text;
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            var confSession = "";
            var confSessionCost = 0;
      }
      if (document.getElementById("mediaCB").checked === true) {
            var confPack = "yes";
            var confPackCost = 115;
      } else {
            var confPack = "no";
            var confPackCost = 0;
      }
      var confTotal = parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost);
      //This line of code calls the 'writeSessionValues' function.
      writeSessionValues(confName, confGroup, confMail, confPhone, confSession, confBanquet, confPack, confTotal);
}

//This function sets the 'textContent' of the various 'span' elements to their respectively. 
function writeSessionValues(confName, confGroup, confMail, confPhone, confSession, confBanquet, confPack, confTotal) {
      document.getElementById("regName").textContent = confName;
      document.getElementById("regGroup").textContent = confGroup;
      document.getElementById("regEmail").textContent = confMail;
      document.getElementById("regPhone").textContent = confPhone;
      document.getElementById("regSession").textContent = confSession;
      document.getElementById("regBanquet").textContent = confBanquet;
      document.getElementById("regPack").textContent = confPack;
      document.getElementById("regTotal").textContent = "$" + confTotal + "";
}
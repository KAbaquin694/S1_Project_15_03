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

//This section of code adds an event listener that loads an anonymous function when the browser loads. The anonymous function calls the 'calcCart' function & grabs 9 input elements with varying ids.
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
});

//This block of code creates the 'sessionTest' function. Inside the function is an if statement that creates a custom validity message if the user has not put in the correct information.
function sessionTest() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      } else {
            sessionBox.setCustomValidity("");
      }
}

//This function is responsible for calculating the cost of registration & storing the user's information into the session storage via 'if' statements & session storage properties.
function calcCart() {
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value);
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);
      sessionStorage.setItem("confBanquetCost", banquetBox * 55);
      var banquetBox = document.getElementById("banquetBox").value;
      var confBanquetCost = banquetBox * 55;
      var sessionBox = document.getElementById("sessionBox");
      //This section executes two different blocks of code depending if the codition is met or not.
      if (sessionBox.selectedIndex !== -1) {
            console.log(sessionBox.innerText);
            sessionStorage.setItem("confSession", sessionBox[sessionBox.selectedIndex].innerText);
            sessionStorage.setItem("confSessionCost", sessionBox[sessionBox.selectedIndex].value);
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            sessionStorage.setItem("confSession", "");
            sessionStorage.setItem("confSessionCost", 0);
            var confSessionCost = 0;
      }
      if (document.getElementById("mediaCB").checked == true) {
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
            var confPackCost = 115;
      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
            var confPackCost = 0;
      }
      //This line of code calculates the total amount of the purhcase.
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost));

      console.log(sessionStorage.getItem("confSessionCost"));
      //This line of code calls the 'writeSessionValues' function.
      writeSessionValues();
}

//This function sets the 'textContent' of the various 'span' elements to their respective session storage ids. 
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}
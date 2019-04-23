"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

      Author: Khalel Abaquin
      Date:   4.19.19  


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

//This line of code loads the function 'writeSessionValues' along with the browser widow.
window.addEventListener("load", writeSessionValues);

//This function sets the 'textContent' of the various 'span' elements to their respective variables. 
function writeSessionValues() {
      document.getElementById("regName").textContent = confName;
      document.getElementById("regGroup").textContent = confGroup;
      document.getElementById("regEmail").textContent = confMail;
      document.getElementById("regPhone").textContent = confPhone;
      document.getElementById("regSession").textContent = confSession;
      document.getElementById("regBanquet").textContent = confBanquet;
      document.getElementById("regPack").textContent = confPack;
      document.getElementById("regTotal").textContent = "$" + confTotal + "";
}
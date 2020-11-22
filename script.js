var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var choice = [];

var upper = confirm("Do you want capital letters?");
var lower = confirm("Do you want lowercase letters ?");
var special = confirm("Do you want special characters?");
var number = confirm("Do you want to add numbers?");
  

  var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
  var number = ["0","1","2","3","4","5","6","7","8","9"];
  









}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
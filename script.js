var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var choice = [];
  var lower = confirm("Do you want lowercase letters?");
  var upper = confirm("Do you want capital letters?");
  var number = confirm("Do you want special characters?");
  var special = confirm("Do you want to add numbers?");

  if((!upper) && (!lower) && (!special) && (!number)) {
    alert ("Please choose a prompt:");
    
  }
  
    

 
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
  
var passwordLength = prompt ("Please choose a length for your password between 8 and 128.");
if ((passwordLength < 8) || (passwordLength > 128)){
  alert("Please pick a password length between 8 and 128.");
  passwordLength = prompt("How long do you want your password?")
}

if ((!lower) && (!upper) && (!number) && (!special)){
  alert("Please select the correct prompt.");
}

if(lower){
  for(var i=0; i < lowerLetter.length; i++){
    choice.push(lowerLetter[i]);
  }
}
if (upper) {
  for(var i = 0; i < upperLetter.length; i++ ){
    choice.push(upperLetter[i]);

  }
}

if(number){
  for(var i=0; i < number.length; i++){
    choice.push(number[i]);
  }
}

if(special){
  for(var i=0; i < special.length; i++){
    choice.push(special[i]);
  }
}
var newPassword = [];
for(i=0; i < passwordLength; i++){
  newPassword.push(choice[Math.floor(Math.random()*choice.length)]);
}

return(newPassword.join(""));



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
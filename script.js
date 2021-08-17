// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialChars = ["!@#$%^&*()_=+"];

function generatePassword () {
var passwordLength = window.prompt("Password must be between 8-28 characters");
var isUpperCase = window.confirm("Will there be upper case letters in the password?");
var isLowerCase = window.confirm("Will there be lower case letters in the password?");
var hasSpecialCharacters= window.confirm("Will the password have special characters?");
var hasNumbers = window.confirm("Will the password have numbers?");



var successfulPassword =[];
var finalPassword = [];

if (isLowerCase) {
  successfulPassword = successfulPassword.concat(lowerCase);
}

if (isUpperCase) {
  successfulPassword = successfulPassword.concat(upperCase);
}

if (hasNumbers) {
  successfulPassword = successfulPassword.concat(numbers);
}

if (hasSpecialCharacters) {
  successfulPassword = successfulPassword.concat(specialChars);
}

for (var i = 0; i < passwordLength; i++) {
  user.push(successfulPassword[Math.floor(Math.random() * successfulPassword.length)]);
}

return finalPassword.join("");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

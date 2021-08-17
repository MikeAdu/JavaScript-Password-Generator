// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_=+";

function generatePassword() {
  var successfulPassword = [];
  var finalPassword = "";
  if (passwordLength < 8 || passwordLength >= 28) {
    window.alert("Password must be between 8-28 characters");
  }

  var passwordLength = window.prompt("Password must be between 8-28 characters");
  var isUpperCase = window.confirm("Will there be upper case letters in the password?");
  var isLowerCase = window.confirm("Will there be lower case letters in the password?");
  var hasSpecialCharacters = window.confirm("Will the password have special characters?");
  var hasNumbers = window.confirm("Will the password have numbers?");
  for (i = 0; i < passwordLength; i++) {
    finalPassword.concat(successfulPassword[Math.floor(Math.random() * successfulPassword.length)]);
    if (hasSpecialCharacters === true) {
      successfulPassword.concat(specialChars)

    }
    if (isLowerCase === true) {
      successfulPassword.concat(lowerCase)
    }
    if (isUpperCase === true) {
      successfulPassword.concat(upperCase)

    }
    if (hasNumbers === true) {
      successfulPassword.concat(numbers)
    }

  }
  console.log(finalPassword)
  return finalPassword;
  
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

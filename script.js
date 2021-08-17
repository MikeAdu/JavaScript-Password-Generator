// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialChars = ["!@#$%^&*()_=+"];

function questions() {
  var isValid = false;
  do {
    var passwordLength = window.prompt("Password must be between 8-28 characters");
    var isUpperCase = window.confirm("Will there be upper case letters in the password?");
    var isLowerCase = window.confirm("Will there be lower case letters in the password?");
    var hasSpecialCharacters = window.confirm("Will the password have special characters?");
    var hasNumbers = window.confirm("Will the password have numbers?");
    if ((passwordLength < 8) || (passwordLength > 128))
      alert("Choose number between 8 and 128");
    else if ((!hasNumbers) && (!isLowerCase) && (!isUpperCase) && (!hasSpecialCharacters))
      alert("Must choose at least one type.");
    else
      isValid = true;

  } while (!isValid);
  return responses;
}

function generatePassword() {
  var passwordOutcomes = questions();
  var possibleCombo = [];
  var finalPassword = "";


if (passwordOutcomes.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOutcomes.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOutcomes.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOutcomes.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
  for (var i = 0; i < passwordOutcomes.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

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







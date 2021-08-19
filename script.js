// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
var numbers = "0,1,2,3,4,5,6,7,8,9".split(",");
var specialChars = "!,@,#,$,%,^,&,*,(,),_,=,+,".split(",");

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
  if (hasSpecialCharacters === true) {
    successfulPassword=successfulPassword.concat(specialChars)

  }
  if (isLowerCase === true) {
    successfulPassword=successfulPassword.concat(lowerCase)
  }
  if (isUpperCase === true) {
    successfulPassword=successfulPassword.concat(upperCase)

  }
  if (hasNumbers === true) {
    successfulPassword=successfulPassword.concat(numbers)
  }
  console.log(successfulPassword)
  for (i = 0; i < passwordLength; i++) {
    finalPassword=finalPassword + (successfulPassword[Math.floor(Math.random() * successfulPassword.length)]);
    console.log(finalPassword)

  }


  
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

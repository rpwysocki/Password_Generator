// Assignment Code.........
var generateBtn = document.querySelector("#generate");

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

var combined = [];



function responses(){

  var amount = Number(prompt('Please provide an amount characters.'));

  var includeLowercase = confirm ('Click OK to include lowercase letters, if not click cancel');
  var includeUppercase = confirm ('Click OK to include uppercase letters, if not click cancel');
  var includeNumbers = confirm ('Click OK to include lowercase numbers, if not click cancel');
  var includeSpecial = confirm ('Click OK to include special characters, if not click cancel');


  console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial);


  return{amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial};
}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword( ) {
  return 'This is a test password'
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

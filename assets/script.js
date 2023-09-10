// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pssword Generation


// Write password to the #password input
function writePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  var criteria = prompt(" Type 'uppercase, lowercase, numbers, or symbols' to include");

  var passwordText = document.querySelector("#password");

  function password () {
    var characters = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "123456789",
      symbols: "!@#$%^&*()",
    };

    var criterias = criteria.toLowerCase().split(', ');

    characterSet = "";
    for(var i=0; i < criterias.length; i++) {
      characterSet += characters[criterias[i]];
    }
    var returnVal = "";
    for (i = 0; i <length; i++) {
      returnVal += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return returnVal
  }
  passwordText.value = password();

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

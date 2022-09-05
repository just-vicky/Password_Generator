const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")"
,"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-ps")
let secondPass = document.getElementById("second-ps")
let passwordLength = 15

function randomChar() {
  let charactersNew = Math.floor(Math.random() * characters.length)
  return characters[charactersNew] 
}

function generate(){
  let password1 = ""
  let password2 = ""
    for(let i = 0; i < passwordLength; i++){
    password1 += randomChar()
    password2 += randomChar()
    }
  firstPass.textContent = password1
  secondPass.textContent = password2
}

// function generate2(){
//   let password = ""
//   for(let i = 0; i < passwordLength; i++){
//     console.log(i);
//     console.log(randomChar());
//     password += randomChar()
//   }
//   return secondPass.textContent = password
// }



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")"
,"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-ps")
let secondPass = document.getElementById("second-ps")
let passwordLength = 15
const btn = document.getElementById("btn")

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
  firstPass.value= password1
  secondPass.value = password2
}

// function clearText() {
//   password = ""
//   firstPass.value = password
//   secondPass.value = password
  
// }


function copyPass1() {
  copyPass = document.getElementById("first-ps");
  copyPass.select();
  document.execCommand("copy");
  
}

function copyPass2() {
  copyPass = document.getElementById("second-ps");
  copyPass.select();
  document.execCommand("copy");
  
}

btn.addEventListener('click', () =>{
  firstPass.value = " ";
  secondPass.value = " ";
})
console.log("its linked")
const morseAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
}
const alphabetMorse ={
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
 }
// return the value when a key is entered
//input innto an array
// const english = document.querySelector(".english")
// const morseCode = document.querySelector(".morseCode")
// const translate = document.querySelector(".translate")
const validInput = /^[0-9a-z\s]+$/gi;
const validMorse = /[.\-\s]+/gi;
export const englishToMorseCode = (input) => {
  // tolowercase function
  
  if ((input.match(validInput)) && typeof(input)=="string") {
    const lowerCaseInput = input.toLowerCase() 
    const inputArray = Array.from(lowerCaseInput);
    const outputArray = inputArray.map(character => {
       return morseAlphabet[character]});
       
  // check for not a string, invalid characters in the string 
  // if not valid return "invalid input deteced" else 
 
   // compares input to key and returns value for each
  
    return outputArray.join(" ");
  }
  else {
   
   return "Invalid input detected"
  }
};

// let letter = "a";
// console.log(letter)
// console.log(morseAlphabet[letter])
export const morsecodeToEnglish = (input) => {
  // tolowercase function
  
  if ((input.match(validMorse)) && typeof(input)=="string") {
    const inputArray = input.split(" ");
    const outputArray = inputArray.map(character => {
       return alphabetMorse[character]});
       
  // check for not a string, invalid characters in the string 
  // if not valid return "invalid input deteced" else 
 
   // compares input to key and returns value for each
  
    return outputArray.join("");
  }
  else {
   
   return "Invalid input detected"
  }
};

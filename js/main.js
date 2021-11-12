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

const validInput = /^[0-9a-z\s]+$/gi;
const validMorse = /[.\-\s]+/gi;
let inputStringEnglish = document.querySelector("#englishInput")
let outputStringMorse = document.querySelector("#morseOutput")
let inputStringMorse = document.querySelector("#morseInput")
let outputStringEnglish = document.querySelector("#englishOutput")
const englishButton = document.querySelector("#translateEnglish")
const morseButton = document.querySelector("#translateMorse")
 
const englishToMorseCode = (input) => {   
  if ((input.match(validInput)) && typeof(input)=="string") {
    const lowerCaseInput = input.toLowerCase() 
    const inputArray = Array.from(lowerCaseInput);
    const outputArray = inputArray.map(character => {
       return morseAlphabet[character]}); 
    return outputArray.join(" ");
  }
  else {   
   return "Invalid input detected"
  }
};


const morsecodeToEnglish = (input) => { 
  if ((input.match(validMorse)) && typeof(input)=="string") {
    const inputArray = input.split(" ");
    const outputArray = inputArray.map(character => {
       return alphabetMorse[character]});
    return outputArray.join("");
  }
  else {  
   return "Invalid input detected"
  }
};

englishButton.addEventListener("click", function() {
  const output = englishToMorseCode(inputStringEnglish.value);
  outputStringMorse.value = output;
});

morseButton.addEventListener("click", function() {
  const output = morsecodeToEnglish(inputStringMorse.value);
  outputStringEnglish.value = output;
});

import {englishToMorseCode, morsecodeToEnglish} from "./functions.js";
// function must return a . when the letter e is inputted
describe("testing englishToMorseCode()", () => {
  it("should translate e to .", () => {
    // ARRANGE
    let result;
    // ACT
    result = englishToMorseCode("e");
    // ASSERT -> TEST WILL PASS OF FAIL
    expect(result).toBe(".");
  });
  // each space should return and addintional 4 empty spaces
  it ("should translate  to / ", ()=> {
    let result;
    result = englishToMorseCode(" ");
    expect(result).toBe("/")
  });
  // function should accept a string of english characters and return a string of morse characters
  // "the quick brown fox jumped over the lazy dog" 
  // "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --."
  it("should return correctly translated sentences in morse code", ()=>{
  let result;
  result = englishToMorseCode("the quick brown fox jumped over the lazy dog");
  expect(result).toBe("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.")
  });
  it("should return correctly translated numbers in morse code", ()=> {
    let result;
    result = englishToMorseCode("1234567890")
    expect(result).toBe(".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----")
  });
  it("should handle capital letters", () =>{
    let result;
    result = englishToMorseCode("H")
    expect(result).toBe("....")
  });
  // if input is not valid return an error alert
  it("should return an error message when input is invalid", () =>{
    let result;
    result = englishToMorseCode("+")
    expect(result).toBe("Invalid input detected")
  });
});
  
describe("testing morsecodetoenglish()", () => {
  it("should translate .  to e", () => {
    // ARRANGE
    let result;
    // ACT
    result = morsecodeToEnglish(".");
    // ASSERT -> TEST WILL PASS OF FAIL
    expect(result).toBe("e");
  });
  it("should translate morse code to sentences correctly", ()=>{
    let result;
    result = morsecodeToEnglish("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
    expect(result).toBe("the quick brown fox jumped over the lazy dog")
  })
  it("should return invalid input error when input is not valid", ()=> {
    let result;
    result = morsecodeToEnglish("hello");
    expect(result).toBe("Invalid input detected")
  });
})

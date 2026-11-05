console.log("hello i am inside of the console");

console.log("i am javascript, not like minecraft");

console.log("i am hidden unless you inspect element and open the console, i am a secret");

console.log("California, USA")
console.log("--------------------------------");
console.log("IDENTIFICATION CARD");
console.log("ID: 1234567890");
console.log("ExP: 04/24/2030");
console.log("DOB: 04/24/2008");
console.log("LM: Villafania-Estrella");
console.log("FN: Marlon");
console.log("18th and Mission St. San Francisco, CA 94110");
console.log("SEX: M");
console.log("HAIR: BLK EYES: BRN")
console.log("HGT: 5'-10  WGT: 67lb");
console.log("-----------------------------------");

const firstname = "Marlon"
let lastname = "Villafania-Estrella"

console.log(firstname +" "+ lastname)

// firstname="Hello" // this will throw an error because const variables cannot be reassigned
// lastname="Hello" // this will work because let variables can be reassigned

console.log("--------------------------------");

function welcoming() {
  console.log(`Hello, welcome to my console ${firstname} :P`)
}

welcoming()

//adding two numbers using a function
let total = adding(12837,1209832)
console.log(total)

function adding(num1, num2) {
  return num1 + num2
} 

//subracting two numbers using a function
let total2 = subtracting(92,25)
console.log(total2)

function subtracting(num1, num2) {
  return num1 - num2
}

//multiplying two numbers using a function
let total3 = multiplying(6,7)
console.log(total3)

function multiplying(num1, num2) {
  return num1 * num2
}

//dividing two numbers using a function
let total4 = dividing(700,33)
console.log(total4)

function dividing(num1, num2) {
  return num1 / num2
}


// lists
let cohort36=["Marlon", "Alan", "Max", "Maryum", "Angelica", "Mariana", "Jasmine", "Lidea", "Aasna", "Britney"]
cohort36.push("Mohammed") // adds a new name to the end of the list
cohort36.push("Anallely")
cohort36.push("Faisa")
cohort36.push("Leo")
cohort36.pop()  // removes the last name in the list
cohort36.push("Leo")
console.log(cohort36)
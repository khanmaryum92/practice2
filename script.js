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

console.log("--------------------------------");

let list5=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (let i=0; i<list5.length; i++) {
  console.log(list5)
}

let list6=["Marlon", "Alan", "Max", "Maryum", "Angelica", "Mariana", "Jasmine", "Lidea", "Aasna", "Britney"]
for (let i=0; i<list6.length; i++){
  console.log(list6)
}

let list7=[123, 456, 789, 0]
for (let i=0; i<list7.length; i++){
  console.log(list7)
}

console.log("--------------------------------");

let person={
  name: "Marlon",
  age: 18,
  city: "San Francisco",
  height: "5'10",}

  console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.city)
console.log(person.height)
console.log("--------------------------------");

let demo=document.getElementsByTagName("p")
console.log(demo)

let demo2=document.getElementById("demo")
console.log(demo2)

let demo3=document.getElementsByClassName("demo")
console.log(demo3)

let demo4=document.getElementById("demo")
console.log(demo4.textContent)
demo4.textContent="hello I am Javascript"

let newelement=document.getElementById("music")
newelement.innerHTML+="<li>Alternative</li>"
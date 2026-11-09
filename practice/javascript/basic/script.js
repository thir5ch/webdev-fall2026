// create variables (const is unchangeable, let is more traditional)
const myName = "Theo";
let myAge = 15;

// prints the variables
console.log(myName);
console.log(myAge);

// reads left to right, ints must be in parentheses to seperate from string unless first 
console.log("My name is " + myName + " and my age is " + myAge + ".")
console.log("The sum of my age + my age is " + myAge + myAge);
console.log(myAge + myAge + " is the sum of my age + my age"); 
console.log("The sum of my age + my age is " + (myAge + myAge));

function reveal() {
    // alert("Hi! Hope you are having a good day!");
    const mySpan = document.getElementById("name");
    console.log(mySpan);
    mySpan.textContent = myName

}


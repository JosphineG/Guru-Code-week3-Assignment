// Question 1
const number ="45" ;
const num = Number(number);
console.log(num);

// Question 2

// const printSum = "20" + 40. //let the result print 60. //*hint: 60.*
const printSum = parseInt("20") + 40;// I used parseInt() function to parse the string as a number
console.log(printSum);

// Const sentence = “I am “ + 23 + 4 + “years old”. //*hint: “I am 27 years old”*
const sentence = "I am " + (23 + 4) + " years old"; //I've added parentheses to ensure that the addition operation is performed before the concatenation
console.log(sentence);

// Question 3
// const myVaue = "May";//A variable declared with const in JavaScript cannot be reassigned after it is initially assigned a value. 
// myValue = 86;

// Fixed code
let myValue = "May"; // Declared with let
myValue = 86; // This will correctly assign 86 to myValue

// Question 4
const firstName = "Josphine";
const lastName = "Gatwiri";
const guruCodingCourse = "JavaScript";
//const testScore = 95;

// Qustion 5
const testScore = 95; 

let grade;

switch (true) {
  case testScore < 0:
    grade = "no test score";
    break;
  case testScore < 30:
    grade = "F";
    break;
  case testScore <= 40:
    grade = "E";
    break;
  case testScore <= 49:
    grade = "D";
    break;
  case testScore <= 59:
    grade = "C";
    break;
  case testScore <= 69:
    grade = "B";
    break;
  case testScore >= 70 && testScore <= 100:
    grade = "A";
    break;
  default:
    grade = "out of range";
}

console.log(`I am ${firstName}  ${lastName},taking ${guruCodingCourse} course and with ${testScore} score ,my grade is ${grade}.`);


// Question 6

// Initialized a variable to start counting from 1.
let count = 1;

// Created a loop using a "while" statement that will run as long as the "count" is less than or equal to 20.
while (count <= 20) {
  // Output the current value of "count" to the console.
  console.log(count);

  // Increment the value of "count" by 1 in each iteration.
  count++;
}

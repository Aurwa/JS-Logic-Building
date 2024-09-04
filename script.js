document.write("Hello World");

let sqrt = Math.sqrt(64);
// console.log(sqrt);

// calculating area of a triangle
/*
let sideOne = Number(prompt("Enter side one: "));
let sideTwo = Number(prompt("Enter side two: "));
let sideThree = Number(prompt("Enter side three: "));
let s = (sideOne + sideTwo + sideThree) / 2;
console.log("s: ", s);

let area = Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree));
console.log(area);
*/

// Swapping numbers using temporary variable
/*
let temp;
let a = 5;
let b = 6;
temp = a;
a = b;
b = temp;
console.log("a: ", a);
console.log("b: ", b);
*/

// Swapping numbers without temporary variable
/*
let a = 5;
let b = 6;

a = a + b;
b = a - b;
a = a - b;
console.log("a: ", a);
console.log("b: ", b);
*/

// Reverse the elements of an array without using an additional array or collection
/*
function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    // Swap the elements at positions i and j
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // Move the pointers towards the center
    i++;
    j--;
  }
  return arr;
}
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
*/

// Check if Two Numbers are Equal Without Using Comparison Operators
/*
let a = 6;
let b = 5;

function checkNumbers(a, b) {
  let res = a - b;
  if (res) {
    console.log("Numbers are not equal");
  } else {
    console.log("Numbers are equal");
  }
}

checkNumbers(a, b);
*/

// Swap Two Strings Without a Temporary Variable

let str1 = "apple";
let str2 = "banana";

str1 = str1.concat(str2);
str2 = str1.slice(0, 5);
str1 = str1.slice(5, 11);

console.log("str1: ", str1);
console.log("str2: ", str2);

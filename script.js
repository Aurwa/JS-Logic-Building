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
/*
let str1 = "apple";
let str2 = "banana";

str1 = str1.concat(str2);
str2 = str1.slice(0, 5);
str1 = str1.slice(5, 11);

console.log("str1: ", str1);
console.log("str2: ", str2);
*/

// Find the Missing Number in an Array
/*
let array = [1, 2, 3, 4, 5, 7];
let n = array[array.length - 1];

let sumCons = (n * (n + 1)) / 2;
// console.log(sumCons);
let actualSum = array.reduce((acc, num) => {
  return acc + num;
}, 0);
// console.log(actualSum);
let missingNum = sumCons - actualSum;
console.log(missingNum);
*/

// Find the Maximum and Minimum in an Array in a Single Pass
/*
let array = [1, 2, 5, 6, 10, 4];

let max = array[0];
let min = array[0];

for (let num of array) {
  if (num > max) {
    max = num;
  } else if (num < min) {
    min = num;
  }
}

console.log("Max: ", max);
console.log("Min: ", min);
*/

// Check if a Number is a Power of Two ( Using Loops)
/*
function powerOfTwo(n) {
  if (n < 1) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;
}

console.log(powerOfTwo(16));
*/

// Check if a Number is a Power of Two (Using Recursion)
/*
function powerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(16));
*/

// Check if a Number is a Power of Two (Using Direct Multiplication)
/*
function powerOfTwo(n) {
  if (n < 1) return false;
  let power = 1;
  while (power < n) {
    power *= 2;
  }
  return power === n;
}

console.log(powerOfTwo(18));
*/

// Find the Intersection of Two Arrays Without Extra Space
/*
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

for (let i of arr1) {
  for (let j of arr2) {
    if (i === j) {
      console.log(i);
      break;
    }
  }
}
*/

// Calculate the Product of All Elements in an Array Except Self Without Division

function productArrays(arr) {
  let length = arr.length;

  let leftProduct = new Array(length).fill(1);
  let rightProduct = new Array(length).fill(1);
  console.log(leftProduct);
}

productArrays([1, 2, 3, 4]);

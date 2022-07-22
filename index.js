// The Story:

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  let num = (cap - on);
  if (wait <= num){
    return 0;
  } else if (wait > num) {
    return wait - num;
  }
}

// Your coworker was supposed to write a simple helper function to capitalize a string
// (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. 
// Fix the helper function they wrote so that it works as intended 
// (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. 
// The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return (n % x === 0) && (n % y === 0) 
}

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 
// will he survive?

// Return True if yes, False otherwise :)
// Fundamentals

function hero(bullets, dragons){
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}
  
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
 try{
  return array.sort((low, high) => low-high).slice(1, -1).reduce((low, high) => low + high);
 }
 catch (err) {
  return 0;
 }
}

// 

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  let x = Math.sign(num);
  if (x === -1) {
    return num;
  } else {
    return -Math.abs(num)
  }
}

// I used Math.sign to determine if the input number is negative or positive. If negative, it is returned as-is. If positive, it uses the -Math.abs
// method to return a negative number.

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return (m * n);
  }
}

// Simple, remove the spaces from the string, then return the resultant string.


function noSpace(x){
  let a = x.replace(/\s/g, '');
  return a;
}
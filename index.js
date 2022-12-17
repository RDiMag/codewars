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
  if (wait <= num) {
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

function hero(bullets, dragons) {
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
  try {
    return array.sort((low, high) => low - high).slice(1, -1).reduce((low, high) => low + high);
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


function noSpace(x) {
  let a = x.replace(/\s/g, '');
  return a;
}

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }

}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool === true) {
    return "Yes"
  } else if (bool === false) {
    return "No"
  }
}

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary = salary * 10;
  }
  return '\u00a3' + salary.toString();
}

// Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. 
//You don't have to worry with strings with less than two characters.

function removeChar(str) {
  let result = str.slice(1, -1)
  return result;
};

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  let nameArray = name.split(' ');
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
};

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


function sumMix(x) {
  let nums = x.map(function (str) {
    return parseInt(str)
  });
  return nums.reduce((partialSum, a) => partialSum + a);
}

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
// and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  if (a.includes(x)) {
    return true;
  } else return false;
}

// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(' ');
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  return s.repeat(n);
}

//Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n) {
  // your code here
  console.log(n)
  var result = 0
  result = Math.floor(n / 2)
  //This works because Math.floor always rounds down to the largest integer equal or less than the given value. 
  //Divided by 2, this results in the number of odd numbers below the given value. 6/2 = 3 (odd #s 1, 3, 5) 5/2 = 2 (odd #s 1, 3) 
  return result
}

//We need a function that can transform a string into a number. 

const stringToNumber = function (str) {
  // put your code here
  return Number(str);
  return null;
}

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) === 'r' || name.charAt(0) === 'R'){
    return name + " plays banjo";
  } else
  return name + " does not play banjo";
}

// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 == 0){
    return false
  } else if (flower1 % 2 !== 0 && flower2 % 2 !== 0){
    return false
  }else return true;
  // moment of truth
}

function getAge(inputString){
// return the age as an integer.
  let n = (inputString).charAt(0);
  return Math.floor(n);
}

function invert(array) {
  let invert = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      invert.push(array[i] - (array[i] * 2));
    }
    if(array[i] < 0) {
      invert.push(Math.abs(array[i]));
    }
    if (array[i] == 0) {
      invert.push(-0);
    }
  }
   return invert;
}

// ternary operator practice 

function saleHotdogs(n){
  return n < 5 ? n*100 : n>= 5 && n<10 ? n*95 : n*90
}

//find sum of all numbers from 1 to n

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
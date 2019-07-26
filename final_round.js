
// # 1. Write a function that reverses a string. Don't use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

function reverseAString(string) {
  var reversedString = "";
  var index = string.length - 1;

  while (index >= 0) {
    reversedString += string[index];
    index--;
  }

  return reversedString
}

console.log(reverseAString("motorboat") === "taobrotom");

// # 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

function countAs(string) {
  var stringArray = string.split("");
  var count = 0;

  stringArray.forEach(function(letter) {
    if (letter === "a") {
      count++;
    }
  });

  return count
}

console.log(countAs("banana") === 3);

// # 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there's a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

function findIndex(array, target) {
  var index = 0;
  var foundIndex = null;

  array.forEach(function(element) {
    if (element === target) {
      foundIndex = index;
    }
    index++;
  });

  return foundIndex;
}

console.log(findIndex([2, 5, 7, 14, 16], 7) === 2);
console.log(findIndex([2, 5, 7, 14, 16], 12) === null);

// # 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

function addToOrderedArray(orderedArray, number) {
  // finding the correct index to place the number
  var placementIndex = 0;
  while (orderedArray[placementIndex] < number) {
    placementIndex += 1;
  }

  // moving the other elements out of the way
  var index = orderedArray.length - 1;
  while (index >= placementIndex) {
    orderedArray[index + 1] = orderedArray[index];
    index -= 1;
  }

  // placing the number at the correct index
  orderedArray[placementIndex] = number;

  return orderedArray
}

console.log(addToOrderedArray([1,2,4,12,42], 8));

// # 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function higherOrLower(orderedArray, number) {
  var halfway_index = Math.floor(orderedArray.length / 2);
  var index = 0;
  var message = null;

  while (index < orderedArray.length) {
    var element = orderedArray[index];

    if (element === number) {
      if (index <= halfway_index) {
        message = "lower";
      } else {
        message = "higher";
      }
    }

    index += 1;
  }

  return message
}

console.log(higherOrLower([2, 7, 14, 16, 24], 7) === "lower");
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 7) === "lower");
console.log(higherOrLower([2, 7, 14, 16, 24], 16) === "higher");
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 16) === "higher");
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 12) === null);

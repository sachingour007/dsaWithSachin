//find the given element and return the index.

let arr = [4, 2, 0, 10, 8, 30];
let num = 10;

function findElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
const ans = findElement(arr, num);
console.log(ans);

//Find the Nagative numbes counts

let arrNegative = [2, -9, 17, 0, 1, -10, -4, -8];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives(arrNegative));

//Write a Function return largest Number in array...

let arr0 = [5, 0, 10, , 8, 17, 20];

function findLargestNumber(arr) {
  let largeNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  return largeNum;
}

console.log(findLargestNumber(arr0));

//Second Largest Number

function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }
  
  let largeNum = -Infinity;
  let secondLargeNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      secondLargeNum = largeNum;
      largeNum = arr[i];
    } else if (arr[i] > secondLargeNum && arr[i] !== largeNum) {
      secondLargeNum = arr[i];
    }
  }
  return { largeNum, secondLargeNum };
}
console.log(secondLargestNumber(arr0));

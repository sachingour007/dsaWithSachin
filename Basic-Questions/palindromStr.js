let str = "A man, a plan, a canal, Panama";

function palindrom(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    console.log("its a palindrom");
  } else {
    console.log("not palindrom");
  }
}

palindrom(str);

const arr = [50, 40, 50, 30];

function maxNumber(arr) {
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function SecLargestNum() {
  if (arr.length < 2) {
    return -1;
  }
  let maxNum = -Infinity;
  let secMaxNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      secMaxNum = maxNum;
      maxNum = arr[i];
    }
    if (arr[i] > secMaxNum && arr[i] !== maxNum) {
      secMaxNum = arr[i];
    }
  }
  return secMaxNum;
}

console.log(SecLargestNum(arr));
console.log(maxNumber(arr));

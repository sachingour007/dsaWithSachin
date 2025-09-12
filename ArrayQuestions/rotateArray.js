const arr = [1, 2, 3, 4, 5, 6, 7];
let k = 12;

function reversal(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
function rotateArr(arr, k) {
  let n = arr.length;
  k = k % n;
  reversal(arr, 0, n - 1);
  reversal(arr, 0, k - 1);
  reversal(arr, k, n - 1);
  return arr;
}

// console.log(rotateArr(arr, k));

const digit = [1, 2, 3];
function plusOne(digit) {
  let num = 0;
  for (let i = 0; i < digit.length; i++) {
    num = num * 10 + digit[i];
  }
  num = num + 1;
  // console.log(num.split(" "));
  return num.toString().split("").map(Number);
}

console.log(plusOne(digit));

const arr = [1, 2, 3, 4, 5];

function sum(n) {
  if (n === 0) {
    return arr[0];
  }

  return arr[n] + sum(n - 1);
}

// console.log(sum(arr.length - 1));

function oddSum(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n === 0) {
    return isOdd ? arr[0] : 0;
  }

  return isOdd ? arr[n] + oddSum(n - 1) : 0 + oddSum(n - 1);
}

console.log(oddSum(arr.length - 1));

const arr = [1, 2, 1000, 10, 90];

function maxNumber(arr) {
  const ans = arr.reduce((acc, num) => {
    return acc <= num ? num : acc;
  }, arr[0]);

  return ans;
}

console.log(maxNumber(arr));

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

console.log(rotateArr(arr, k));

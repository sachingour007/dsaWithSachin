const arr = [1, 2, 3, 4, 5];

function avgOfArray(arr) {
  let countElement = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avrageVal = Math.floor(sum / countElement);
  return avrageVal;
}
console.log(avgOfArray(arr));

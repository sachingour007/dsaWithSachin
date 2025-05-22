const arr = [2, 3, 4, 2, 5, 2];
const number = 1;

function countNumber(arr, num) {
  let repatNum = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === num) {
      repatNum++;
    }
  }

  if (!repatNum) {
    return -1;
  }
  return repatNum;
}

console.log(countNumber(arr, number));

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

function countRepeatNumber(arr) {
  const visited = {};
  for (let i = 0; i < arr.length; i++) {
    //this conditon help us repeated No.
    if (visited[arr[i]]) continue;
    let count = 0;
    let val = null;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    visited[arr[i]] = true;
    console.log(arr[i], " frequency", count);
  }
  console.log(visited);
  
}
console.log(countNumber(arr, number));
console.log(countRepeatNumber(arr));

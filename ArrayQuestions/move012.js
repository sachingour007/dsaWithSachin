const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function move012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
        let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    } else {
      mid++;
    }
  }
  return arr;
}

console.log(move012(arr));

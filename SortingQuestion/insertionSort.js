const arr = [5, 6, 1, 8, 2, 0, 100, 50];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentEle = arr[i];
    let prev = i - 1;

    while (arr[prev] > currentEle && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = currentEle;
  }

  return arr;
}
console.log(insertionSort(arr));

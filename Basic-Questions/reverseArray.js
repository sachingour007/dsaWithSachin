const arr = [1, 2, 3, 4, 5, 6];

//Same Array

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = start;
    arr[start] = arr[end];
    arr[end] = start;
    start++;
    end--;
  }
}

reverseArray(arr);

//Reverse in New Array

function reverseArrayInNew(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}

// reverseArray(arr);
reverseArrayInNew(arr);

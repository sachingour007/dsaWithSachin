const arr = [1, 2, 3, 4, 5];

function printSubArray(arr) {
  for (let i = 0; i < arr.length; i++) { 
    for (let j = i; j < arr.length; j++) {
      const subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
      }
      console.log(subArr);
    }
  }
}

printSubArray(arr);



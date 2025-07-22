let num = 5;

function SumOfN(num) {
  if (num === 0) {
    return 0;
  }

  return num + SumOfN(num - 1);
}

console.log(SumOfN(num));

const arr = [3, 2, 3];

function majorityElement(arr) {
  const result = {};

  for (let key of arr) {
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = arr[key];
      result[key] = 1;
    }
  }

  for (let val in result) {
    if (result[val] > arr.length / 2) {
      return val;
    }
  }
  return 0;
}

console.log(majorityElement(arr));


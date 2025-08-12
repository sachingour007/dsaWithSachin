let n = 5;

function generateFibonacci(n) {
  const arr = [0, 1];

  if (n <= 0) return [];
  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {
    console.log(arr[i - 1]);

    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

console.log(generateFibonacci(n));

const arr = [2, 6, 8, 1, 3];

function bubleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const newArr = bubleSort(arr);

console.log(newArr);

let str = "sachin gour";

function reverseStr(str) {
  str = str.split(" ")
  let ans =  str.map((word) => {
    return word.split("").reverse().join("");
  });
  console.log(ans.join(" "));
}

console.log(reverseStr(str));

// Input:
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

// Output:
// { "a": 1, "b.c": 2, "b.d.e": 3 }

function flattenObject(obj) {
  const newObj = structuredClone(obj);
  console.log(newObj);
}

// flattenObject(obj)

const arr = [1, 2, 3];

function indexMap(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[i]) {
      obj[i] = arr[i];
    }
  }
  console.log(obj);
}

indexMap(arr);

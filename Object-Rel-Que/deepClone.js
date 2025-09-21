const obj = { a: 1, b: { c: 2 } };

// clone change karne par original affect na ho

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let item of obj) {
      console.log(item);

      arrCopy.push(deepClone(item));
    }
    return arrCopy
  }

  const cloneObj = {};
  for (let key in obj) {
    console.log(obj[key]);
    cloneObj[key] = deepClone(obj[key]);
  }
  return cloneObj;
}

const clone = deepClone(obj);
console.log(clone);
clone.b.c = [1, 2, 3];
// console.log(obj.b.c);

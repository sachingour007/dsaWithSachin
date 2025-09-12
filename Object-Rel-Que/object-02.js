//Q1. Print Nasted Values

const user = {
  name: "Sachin",
  address: {
    city: "Ajmer",
    pincode: 305001,
  },
};

// console.log(user.address.city);
// console.log(user.address.pincode);
// user.address.pincode = "305002";
// console.log(user.address.pincode);
// user.address.state = "Rajasthan";
// console.log(user.address);

//Q2. Print Keys

const employee = {
  id: 101,
  name: "Ravi",
  salary: 50000,
  contact: {
    email: "ravi@gmail.com",
    phone: "9876543210",
  },
};

// console.log(Object.keys(employee));

//Q3. Count frequency of numbers in array using object

const arr = [2, 3, 2, 4, 3, 5, 2];

function frequencyCounter(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = count;
    }
  }
  return obj;
}
// console.log(frequencyCounter(arr));

// Q4. Find the element that appears most

function countFrequency(arr) {
  const result = new Set();
  for (let i = 0; i < arr.length; i++) {}
}
// countFrequency(arr)

function groupBy(arr, key) {
  // Your implementation
  if (arr.length <= 0) {
    return {};
  }

  const result = {};
  for (obj of arr) {
    let objKey = obj[key];
    if (!result.hasOwnProperty(objKey)) {
      //25
      result[objKey] = [];
    }
    result[objKey].push(obj);
  }
  console.log(result);
}

//For the purpose of user debugging.
//pass your array and key in function call
const users = [
  { name: "Alice", age: 25 },
  { name: "bob", age: 30 },
  { name: "charlie", age: 25 },
];
console.log(groupBy(users, "age"));

functionName();
function functionName() {
  console.log("heelo");
}

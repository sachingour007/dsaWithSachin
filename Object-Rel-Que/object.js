const user = [
  { name: "alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

function groupBy(obj, key) {
  const result = {};
  for (const user of obj) {
    const keyVal = user[key];
    if (!result.hasOwnProperty(keyVal)) {
      result[keyVal] = [];
    }
    result[keyVal].push(user);
  }
  return result;
}

console.log(groupBy(user, "age"));

//01 Print Object

const person = {
  name: "sachin",
  age: 25,
  city: "ajmer",
};
console.log(person);

//Dot Notation
person.email = "sachin@gmail.com";
//Braket Notation
person["email01"] = "sachin1@gmail.com";

console.log(person);

//Update the object
person.city = "delhi";
console.log(person);

//Delete the property

delete person.age;
console.log(person);

function isKeyPresent(person, key) {
  if (person.hasOwnProperty(key)) {
    console.log("yes its persent");
  } else {
    console.log("not present");
  }
}

isKeyPresent(person, "email");

//Level ==> 2

const car = {
  brand: "Tata",
  model: "Safari",
  year: 2022,
};

function printObj(obj) {
  for (const key in obj) {
    console.log(obj[key]);
    console.log(`${key} : ${obj[key]}`);
  }
}
printObj(car);

//02.  Q2. Print all keys of the object using Object.keys()
console.log(Object.keys(car));

//03. Q3. Print all values of the object using Object.values()

console.log(Object.values(car));

//04  Q4. Print key and value pairs using Object.entries() and loop through it.

function arrayInKeyValuePair(car) {
  const newArr = Object.entries(car);
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i], "85");
    const [key, value] = newArr[i];
    console.log(`${key} :  ${value}`);
  }
}

arrayInKeyValuePair(car);

// Q5. Count how many keys an object has

// console.log(Object.keys(car).length);

const arr = ["emailId"];

const req_body = {
  firstName: "Shiva",
  lastName: "gour",
  emailId: "Shivagmail.com",
  password: "Shiva@123",
  age: 26,
  gender: "male",
  skills: ["JS", "React", "Next"],
};

function checkfilds(arr, req_body) {
  const data = Object.keys(req_body).some((k) => arr.includes(k));
  console.log(data, "111");
}

checkfilds(arr, req_body);

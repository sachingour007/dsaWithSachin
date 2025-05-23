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
    console.log(person.hasOwnProperty(key));

    console.log("yes its persent");
  } else {
    console.log("not present");
  }
}

isKeyPresent(person, "email");

const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
];

// Output:
// {
//   21: 2,
//   25: 1
// }

function countBy(users, age) {
  let newObj = {};

  for (let key of users) {
    let keyVal = key[age];
    if (!newObj.hasOwnProperty(keyVal)) {
      newObj[keyVal] = 1;
    } else {
      newObj[keyVal]++;
    }
  }
  console.log(newObj);
}

countBy(users, "age");

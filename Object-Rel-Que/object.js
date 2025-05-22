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

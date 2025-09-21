// Input:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice Again" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bobby" },
];

// Output (unique by "id"):
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ]

function removeuplicates(users) {
  const seen = new Set();
  const result = [];
  for (let item of users) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      result.push(item);
    }
  }
  return result;
}

console.log(removeuplicates(users));

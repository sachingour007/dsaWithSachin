// Input:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "hem" },
];

// Output:
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" }
// }


function keyBy(users, id){
   const newObj = {};
   for(let user of users){
    const keyId = user[id];
    newObj[keyId] = user
    
   }
    console.log(newObj);
    
}

keyBy(users, "id")
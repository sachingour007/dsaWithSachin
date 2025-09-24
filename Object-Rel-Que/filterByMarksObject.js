const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 85 },
  { name: "David", marks: 76 },
  { name: "Eve", marks: 92 },
];
/*
    {
        85: ["Alice", "Charlie"],
        92: ["Bob", "Eve"],
        76: ["David"]
    }
*/

function filterByMarksObject(obj){
    const result = obj.reduce((acc, item) => {
        console.log(item.marks);
        if(!acc.hasOwnProperty(item.marks)){
            acc[item.marks] = []
        }
        acc[item.marks].push(item.name);
        return acc
    },{})
    return result
}

/*
function filterByMarksObject(obj){
  const result = {};

  for(let item of obj){
    console.log(item);
    const m = item.marks
    if(!result.hasOwnProperty(m)){
        result[m] = []
    }
    result[m].push(item.name) 
  }
    return result
}

*/


console.log(filterByMarksObject(students))
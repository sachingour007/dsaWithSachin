const orders = [
  { id: 1, item: "Shoes", quantity: 2 },
  { id: 2, item: "Shirt", quantity: 1 },
  { id: 1, item: "Shoes", quantity: 3 },
  { id: 3, item: "Cap", quantity: 5 },
  { id: 2, item: "Shirt", quantity: 2 },
];
/*
output:
[
  { id: 1, item: "Shoes", quantity: 5 },
  { id: 2, item: "Shirt", quantity: 3 },
  { id: 3, item: "Cap", quantity: 5 }
]
*/

function quantityIncrease(orders) {
  const result = {};
  for (let item of orders) {
    const keyVal = item.id;
    if (!result.hasOwnProperty(keyVal)) {
      result[keyVal] = { ...item };
    } else {
      result[keyVal].quantity += item.quantity;
    }
  }

  const ans = Object.values(result);
  return ans;
}

console.log(quantityIncrease(orders));

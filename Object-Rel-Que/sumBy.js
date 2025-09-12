// Input:
const orders = [
  { customer: "A", amount: 100 },
  { customer: "B", amount: 200 },
  { customer: "A", amount: 50 },
];

// Output:
// {
//   A: 150,
//   B: 200
// }

function sumBy(orders, customer) {
  const newObj = {};

  for (let cust of orders) {
    let cu = cust[customer];
    if (!newObj.hasOwnProperty(cu)) {
      newObj[cu] = cust.amount;
    } else {
      newObj[cu] += cust.amount;
    }
  }
  console.log(newObj);
}

sumBy(orders, "customer");

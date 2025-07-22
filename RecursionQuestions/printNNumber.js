let n = 1;
let tillNumber = 10;

function printN(num) {
  if (num >= tillNumber) {
    console.log(num);
    return;
  }
  console.log(num);

  printN(++num);
}

console.log(printN(n));

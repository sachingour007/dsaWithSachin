let num = 5;

function factorialNum(num) {
  num = Number(num);

  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  while (num > 0) {
    result = result * num;
    num--;
  }
  return result;
}

console.log(factorialNum(num));

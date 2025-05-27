let num = 1234567;

function sumOfNumber(num) {
  if (isNaN(num)) {
    return "Please Enter Number!!";
  }
  let count = 0;
  while (num > 0) {
    let rem = num % 10;
    count = count + rem;
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(sumOfNumber(num));

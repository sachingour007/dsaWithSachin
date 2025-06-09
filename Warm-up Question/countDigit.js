let number = -25968;

function countNumber(number) {
  if (number === 0) {
    return 1;
  }
  number = Math.abs(number);

  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

console.log(countNumber(number));



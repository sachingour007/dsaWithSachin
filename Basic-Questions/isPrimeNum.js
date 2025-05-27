//Basic Approches

let num = 37;

function isPrime(num) {
  if (isNaN(num)) {
    return "Please Enter Number";
  }
  let flag = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    console.log("Num is Prime");
  } else {
    console.log("Num is Not Prime");
  }
}

//Advance Approches

function printPrime(num) {
  const primeArr = [];

  for (let i = 2; i <= num; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      primeArr.push(i);
    }
  }
  return primeArr;
}

console.log(isPrime(num));
console.log(printPrime(num));

//Basic Approches

let num = 6;

function isPrime(num) {
  if (isNaN(num)) {
    return "Please Enter Number";
  }
  if (num % 2 !== 0) {
    return "Number is Prime";
  } else {
    return "Not Prime";
  }
}


//Advance Approches




console.log(isPrime(num));

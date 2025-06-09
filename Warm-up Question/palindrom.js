let num = -4321;

function isPalindrom(num) {
  if (num < 0) {
    return false;
  }
  let numCopy = num;
  let rev = 0;
  while (numCopy > 0) {
    let rem = Math.floor(num % 10);
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (num === rev) {
    console.log("Number is Palindrom");
  } else {
    console.log("Number is not Palindrom");
  }
}

isPalindrom(num);

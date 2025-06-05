function greet(name) {
  console.log("Namaste " + name);
}
greet("Sachin");

function sum(a, b) {
  let ans = a + b;
  return ans;
}

console.log(sum(10, 20));

//Vote Eligible or Not

function isVoter(age) {
  if (age <= 0) {
    console.log("invalid Number");
  } else if (age < 18) {
    console.log("User is not Eligible");
  } else {
    console.log("User is Eligible");
  }
}

isVoter(-1);

function isEven(num) {
  if (num % 2 !== 0) {
    console.log("Num is Odd");
  } else {
    console.log("Num is Even");
  }
}

isEven(5);

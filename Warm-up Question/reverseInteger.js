// Question:01 Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * Example 1:

    Input: x = 123
    Output: 321
    Example 2:

    Input: x = -123
    Output: -321
    Example 3:

    Input: x = 120
    Output: 21
*/

let num = -123;

function reverseInteger(x) {
  xCopy = x;
  let result = 0;
  xCopy = Math.abs(xCopy);

  while (xCopy > 0) {
    let rem = xCopy % 10;
    result = result * 10 + rem;
    xCopy = Math.floor(xCopy / 10);
  }

  let limit = Math.pow(2, 31);
  if (result < -limit || result > limit) {
    return 0;
  }

  return x < 0 ? -result : result;
}

console.log(reverseInteger(num));

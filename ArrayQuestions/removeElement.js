let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

function findUniqueElement(nums, val) {
  let i = 0;
  let j = nums.length - 1;
  console.log(j);

  while (i <= j) {
    if (nums[i] === val) {
      if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return j + 1;
}

console.log(findUniqueElement(nums, val));

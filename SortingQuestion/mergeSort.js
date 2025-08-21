const nums = [5, 2, 3, 1];

var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  const newArr = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newArr.push(left[i]);
      i++;
    } else {
      newArr.push(right[j]);
      j++;
    }
  }

  return [...newArr, ...left.slice(i), ...right.slice(j)];
}

console.log(sortArray(nums));

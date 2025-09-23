let nums1 = [2,8,1];
let nums2 = [9,9,9];

// Output: [1, 2, 3, 4, 5, 7]
// Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

function unionArr(nums1, nums2) {
  let newArr = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      newArr.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      newArr.push(nums1[p1]);
      p1++;
    } else {
      newArr.push(nums2[p2]);
      p2++;
    }
  }

  return [...newArr, ...nums1.slice(p1), ...nums2.slice(p2)];
}

// console.log(unionArr(nums1, nums2));



function unionOfArray(nums1, nums2){
    let set = new Set();

    for(let i=0; i< nums1.length; i++){
        set.add(nums1[i]);
    }

    for(let i=0; i< nums2.length; i++){
        set.add(nums2[i]);
    }
    const result = [...set]
    return result
    
}
console.log(unionOfArray(nums1, nums2));

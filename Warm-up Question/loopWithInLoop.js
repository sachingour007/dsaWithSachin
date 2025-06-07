const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(arr[i], arr[j]);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}

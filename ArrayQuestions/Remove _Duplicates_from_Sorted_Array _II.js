const arr = [0,0,0,1,1,1,2,2,3];

function makeTwiceElementArr (){
  let k = 0;

  for(let i = 0; i< arr.length; i++){
    if(k<2 || arr[i] !== arr[k-2]){
      arr[k] = arr[i];
      k++;
    }

  }
  return k
}

console.log(makeTwiceElementArr(arr));

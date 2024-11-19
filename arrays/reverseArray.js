function reverseArray(arr){
  let left = 0;
  let right = arr.length -1;
  while(left< right){
    //swap
    [arr[left], arr[right]] =[arr[right],arr[left]];
    left++;
    right--;
 }
 console.log(arr)
 return arr;
}



const arr = [8,2,3,5,7,8]
reverseArray(arr) 
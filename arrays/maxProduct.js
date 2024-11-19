// Find the Maximum Product of Two Numbers in an Array
function maxProduct(arr){
    if(arr.length < 2) return null;
    arr.sort((a,b) => a-b);
    const n = arr.length;

    const maxProduct = Math.max(arr[0] * arr[1], arr[n-1] * arr[n-2]);
    console.log(maxProduct);
}




const arr =[1, 10, -5, 1, -100];
maxProduct(arr);
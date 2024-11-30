function moveZeros(arr){
    let nonZeroIndex = 0; // a pointer for track of position of nonZero elemnts

    for(let i = 0; i<arr.length; i++){ // tranverse the array
        if(arr[i] !== 0){
            // If the element is non-zero, move it to the 'nonZeroIndex' position
            if(i !== nonZeroIndex){
                arr[nonZeroIndex] = arr[i];
                arr[i]= 0;
            }
            nonZeroIndex++
        }
    }
    return arr;
}


const arr = [1, 0, 4, 0, 9, 0, 0, -1, 5];
console.log(moveZeros(arr)) // [1, 4, 9, -1, 5,0, 0, 0,  0] 
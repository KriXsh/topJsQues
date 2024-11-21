//find the majority element in array - return the number which accouring multiple times
//Boyer-Moore Voting 
//** we can also use hasMap here but it will work for smaller array

function majorityElement(arr){
    let candidate = null;
    let count = 0;
    // find the candidate 
    for (let num of arr){
        if(count == 0){
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    count = 0;
    for( const num of arr){
        if(num == candidate){
            count++;
        }
    }
    return count > Math.floor(arr.length / 2) ? candidate : false; 
}




// const arr = [1,2,4,6,8,9,9,9,9.9,9,5]
const arr = [3, 3, 4, 2, 3, 3, 3, 1];
console.log(majorityElement(arr));
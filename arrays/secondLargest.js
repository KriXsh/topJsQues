/*Q.1 Second Largest Number 
given the array is size of N -- print second largest number  
* distinct lement of the arrays 

* input [12,35,1,10,34,1]----- output - 34
* input [10, 5, 10] ---- output - 5
*/

//approch - 1 bruteFroce  - just normal sorting and return the second last index
//   [12,35,1,10,34,1] ---> after sort [1,1,,10,12,34,35]
// But in thesecond example it contain duplicate so it will be like ------> [5,10,10]

//aproch- 2 -(better) using set - to avoid the duplicate value - time complexcity -  o(nlogn)


function secondLargest(arr){
    const uniqueArray = Array.from(new Set(arr)); // convert set object to a array (time complexcity - o(n))
    uniqueArray.sort((a,b)=> b - a) // o(nlogn)
    console.log(uniqueArray[1])

}



// approch -3(optimal) 


function secondLargestOptimal(arr){
    if (arr.length < 2) return -1; // Edge case: If array has less than 2 elements
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) { 
            second = first;  // Update second largest
            first = num;  // Update largest
        } else if (num > second && num !== first) {
            second = num;  // Update second largest if it's smaller than first and not duplicate
        }
    }
    return second === -Infinity ? -1 : second; // If no second largest exists, return -1
}


const arr = [12,35,1,10,34,1]
console.log(secondLargestOptimal(arr));

function count(arr){
    let result = {};
    for(let i of arr){
        result[i] = result[i] ?  result[i] + 1 : 1; 
        
    }
    console.log(result);
}




let arr = [1,2,3,4,5,6,4,4,4,6,8,7,3,5,7]
console.log(count(arr));
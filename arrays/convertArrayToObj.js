// we have  the array we need to return the array  as object

const arr = [1,2,46,8,94,4,7];
const obj = arr.reduce((acc, it)=> ({...acc, [it]:it}), {})

console.log(obj)




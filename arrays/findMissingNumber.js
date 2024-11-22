
const arr =[1,2,3,5]
console.log("arr is",arr)
const count = 10; 

let outPut = [];
for(let i = 1; i<=count; i++){
    !arr.includes(i) ? outPut.push(i) : "";
}


console.log("missing numbers are",outPut)



//--- goal is to make compose funciton 


function sequre(val) {
    return val * val;
}

function multiply(a, b) {
    return a * b;
}

function composeFunc(func1, func2) {
    return function(a,b){
        return func2(func1(a,b));
    };
}

const task = composeFunc(multiply , sequre)

console.log(task(2,4))
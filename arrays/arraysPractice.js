//--------------------------- Array Declration -------------------------
const arr = ["apple", "banana", "cherry"];

//object
const person = {
    name: "Krish",
    age: 24
}
const addArrays = ["apple", "banana", "cherry", person];

//-------------------------------- array remove and add element methods -----------------------

addArrays.push("orange"); // push in the end
addArrays.pop() // remove the last element

addArrays.unshift("pomyGreande") // add to the first
addArrays.shift() // remove the first element of teh array
console.log(addArrays);

// loops ---------------
for (let i = 0; i < arr.length; i++) {
    console.log("for loop printling", arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log("while loop excuted", arr[i]);
    i++;
}

//-------------------------------- inbuilt loop methods -------------------------------------

const numbers = [1, 2, 5, 3, 4, 8, 7];

// map return the the new array doestnot modify teh acctual array
const newArray = numbers.map((items) => {
    return items + 5;
})

//filter the arrays and returns the arrays when it statisfy teh conditions
const filterArray = newArray.filter((item) => {
    return item > 10;
})

//some method - works like filter - returns true or false based on the conditions
const res = newArray.some((item)=>{
    return item >3;
})
//every method - returns true or false based on the conditions after checking each elements
const res1 = newArray.every((item)=>{
    return item >10;
})

// returns the element after statisfy the conditions or false then return undefinded
const findElement = newArray.find((item)=>{
    return item >7;
})

// reduce take just an arrays and reduce to just a new value
const reducedArray = newArray.reduce((prev, item) => {
    return prev + item;
}, 0)


//----------------------------- spread and  rest operator in arrays --------------------------
const nums = [2,4,6,8,9]
const num2 = [10,4,2,5]

const finalNums = [...nums, ...num2]


// -------------------------- concat method ----------------------------
// doesn't  modify the original array and returns a new array - we can concat more than 2 arrays 
const concatArray = nums.concat(num2)


// ------------------------ slice method -------------------------------
const arr1 = ["a", "b", "c"];
console.log("slice method -------", arr1.slice(-2));

// ------------------------spice method -------------------------------
const removedElements = arr1.splice(-2);
console.log("After splice:", arr1);
console.log("Removed elements:", removedElements);

// ------------- console.logs ------------------------
console.log("new maped array ----", newArray)
console.log("new filter array --------", filterArray)
console.log("reduce - sum of the array is --------", reducedArray)
console.log("check sum method ---------",res)
console.log("check every method ------", res1)
console.log("check the find method -----------", findElement)
console.log("Spread operators methods ------------ ",finalNums)
console.log("concatArray -------------", concatArray)

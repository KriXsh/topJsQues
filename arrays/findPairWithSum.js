//Find the Pair with the Given Sum

function findPairWithSum(arr, target) {
    const seen = new Set();
    for (const num of arr){
        const complement = target - num;
        if(seen.has(complement)){
            console.log("Pair found:", [complement, num]);
        }
        seen.add(num);
    }
    console.log("notFound")

}

findPairWithSum([2, 7, 11, 15], 9);
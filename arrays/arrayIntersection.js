//  Find the Intersection of Two Arrays
function arrayIntersection(arr1, arr2){
    const set1 = new Set(arr1);
    const arrayIntersection = arr2.filter(num => set1.has(num));
    console.log(arrayIntersection)


}

arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);


function rotateArray(arr, k) {
    k = k % arr.length;
    const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
    console.log("Rotated array:", rotated);
    return rotated;
}

rotateArray([1, 2, 3, 4, 5], 2);
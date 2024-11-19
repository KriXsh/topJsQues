function firstNonRepeatingElement(arr) {
    const frequency = {};

    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (const num of arr) {
        if (frequency[num] == 1) {
            console.log("First non-repeating element is:", num);
           
        }
    }

    console.log("No non-repeating element found");
    return null;
}

firstNonRepeatingElement([4, 5, 1, 2, 0, 4]);

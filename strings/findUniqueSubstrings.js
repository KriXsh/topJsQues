// find the all unique substrings in the given strings

function uniqueSubStrings(s) {
    const substring = new Set();
    for (let i = 0; i < s.length; i++) {
        let currentSubstring = "";
        const charSet = new Set();
        for(let j = i; j < s.length; j++){
            if(charSet.has(s[j])) break;
            charSet.add(s[j]);
            currentSubstring += s[j];
            substring.add(currentSubstring);
        }

    }
    console.log("All unique substrings:", Array.from(substring));
    // return Array.from(substring);
}


const s = "abc";
uniqueSubStrings(s);


/*
The function findAllUniqueSubstrings generates all unique substrings from a given string s where no characters are repeated within each substring. Here's how it works:

Outer Loop (for (let i = 0; i < s.length; i++)):

This loop starts from each character in the string s as a potential starting point of a substring.
i represents the starting index of the current substring.
Initialization:

currentSubstring: Keeps track of the substring currently being built starting from index i.
charSet: Tracks the unique characters in the substring currently being processed. It prevents duplicates from entering the substring.
Inner Loop (for (let j = i; j < s.length; j++)):

This loop extends the substring starting at i by adding characters one at a time, up to s[j].

Break Condition:

If a character s[j] is already in charSet, it means adding s[j] would introduce a duplicate. The loop breaks, and we stop extending this substring further.
Adding Characters:

Add s[j] to charSet (to ensure uniqueness).
Append s[j] to currentSubstring (to build the substring).
Store the Substring:

Add the currentSubstring to substrings (a global Set that keeps all unique substrings found so far).
Output:

After all iterations of the outer and inner loops, substrings contains all unique substrings of the string s.
The function converts the Set to an array and returns it.
Why Are Two Sets Declared?
Global Set: substrings:

This Set is declared outside the loops.
Purpose: It stores all the unique substrings found throughout the entire string.
Using a Set ensures that duplicate substrings (if any) are automatically removed.
Local Set: charSet:

This Set is declared inside the outer loop and is reset for each starting character i.
Purpose: It tracks the unique characters within the current substring being built.
It ensures no duplicate characters are added to currentSubstring.
Example Walkthrough
For s = "abc":

Outer Loop i = 0:

Starting substring: "a"
Inner Loop adds: "a", "ab", "abc"
charSet ensures no duplicates, and these substrings are added to substrings.
Outer Loop i = 1:

Starting substring: "b"
Inner Loop adds: "b", "bc"
charSet ensures no duplicates, and these substrings are added to substrings.
Outer Loop i = 2:

Starting substring: "c"
Inner Loop adds: "c"
charSet ensures no duplicates, and this substring is added to substrings.
Final Result:

javascript
Copy code
substrings = ["a", "ab", "abc", "b", "bc", "c"];
Key Benefits of Two Sets
Global substrings: Ensures you get all unique substrings without worrying about duplicates.
Local charSet: Ensures each individual substring is built without repeated characters.
This design ensures efficiency and clarity by separating the responsibilities of the two Set objects.

*/
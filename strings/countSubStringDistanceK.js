function countSubstringsWithKDistinct(s, k) {
    let left = 0, count = 0;
    const charMap = new Map();
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charMap.set(char, (charMap.get(char) || 0) + 1);
        while (charMap.size > k) {
            const leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            if (charMap.get(leftChar) === 0) charMap.delete(leftChar);
            left++;
        }
        count += right - left + 1; // Add all substrings ending at `right`
    }
    console.log(`Count of substrings with at most ${k} distinct characters:`, count);
    return count;
}



const s = "abcba"
const k = 2;

countSubstringsWithKDistinct(s, k)

/*

Input: s = "abcba", k = 2

Initial State: left = 0, count = 0, charMap = {}.
Iteration 1 (right = 0, char = "a")
Add "a" to charMap: {a: 1}.
Valid substrings: "a".
Update count: count = 1.
Iteration 2 (right = 1, char = "b")
Add "b" to charMap: {a: 1, b: 1}.
Valid substrings: "b", "ab".
Update count: count = 3.
Iteration 3 (right = 2, char = "c")
Add "c" to charMap: {a: 1, b: 1, c: 1}.
charMap.size > k. Shrink window:
Remove "a": {b: 1, c: 1}.
Move left to 1.
Valid substrings: "c", "bc".
Update count: count = 5.
Iteration 4 (right = 3, char = "b")
Increment "b": {b: 2, c: 1}.
Valid substrings: "b", "cb", "bcb".
Update count: count = 8.
Iteration 5 (right = 4, char = "a")
Add "a": {b: 2, c: 1, a: 1}.
charMap.size > k. Shrink window:
Remove "c": {b: 2, a: 1}.
Move left to 2.
Valid substrings: "a", "ba", "bba".
Update count: count = 11.
Final Output: 11 substrings with at most 2 distinct characters.


*/
// return longest substring from the the given string

function longestSubString(s) {
    let longestSubString = "";
    let currentSubstring = "";
    let charSet = new Set();
    for (let char of s) {
        while (charSet.has(char)) {
            charSet.delete(currentSubstring[0]);
            currentSubstring = currentSubstring.slice(1);
        }
        charSet.add(char);
        currentSubstring += char;
        if (currentSubstring.length > longestSubString.length) {
            longestSubString = currentSubstring
        }
    }
    console.log("Longest substring: ", longestSubString); // to find logest substring
    console.log("longest substring length:", longestSubString.length); // tofind length

}

const s = "adsdddsxadcde"
longestSubString(s)
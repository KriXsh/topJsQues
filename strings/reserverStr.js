// q - monk ecompance  - reverse the array and remove the extra space  

function reverseStr(str){
    // Trim leading and trailing spaces
    let trimmedStr = str.trim();
    let out = "";
    
    // Loop from the end of the trimmed string to the beginning
    for(let i = trimmedStr.length - 1; i >= 0; i--){
        out += trimmedStr[i];
    }
    
    console.log(out);
}

const str = " looc  ";
reverseStr(str); // Output: "cool"

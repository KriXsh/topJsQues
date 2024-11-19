// check string char is unique or not

function areUniuqe(s){
    const charSet = new Set();
    for (let char of s){
        if(charSet.has(char)){
            console.log(`Not all characters are unique in '${s}'`)
        }
        charSet.add(char);
    }
    console.log(`All characters are unique in '${s}'`)
}

const s = "abgcddd";
areUniuqe(s);
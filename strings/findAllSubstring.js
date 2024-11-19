// find all substring in the given string 

function generateAllSubstrings(s){
    const substring = [];
    for(let i=0; i<s.length; i++){
        for(let j =i+1; j<s.length; j++){
            substring.push(s.slice(i,j));
        }

    }
    console.log("all substrings are :", substring)
}



const s = "abc";
generateAllSubstrings(s);





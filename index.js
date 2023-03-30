//matching one character

//takes in one character pattern and one character text string and returns a boolean
function matchOne(pattern,text){
    if(!pattern) return true; //if there is no pattern given then any text is true as there is no pattern to compare .
    if(!text) return false; //if there is no text but pattern is given then it returns false.
    if(pattern==".") return true; //"." is a wildcard character i.e anything compared to (.) is true.
    return pattern===text; 
}


//matching same length strings

function match(pattern,text){
    if(pattern==="") return true;
    else return (
        matchOne(pattern[0],text[0]) && match(pattern.slice(1),text.slice(1))
    );
}


function search(pattern,text){
    // $ matches the last of the string so , if the pattern has $ at last then it checks for the last element in the text
    if(pattern[1]==="$"){
        let textLength=text.length;
        return match(pattern[0],text[textLength-1])
    }
    if(pattern[0]==="^"){
       return match(pattern.slice(1),text) 
    }
}

console.log(search(".$","aa"))



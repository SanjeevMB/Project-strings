
// ==== String Problem #4 ====

// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function string4(obj){
    for(let k in obj){
        obj[k] = obj[k][0].toUpperCase() + obj[k].slice(1).toLowerCase();
    }   
    return obj; 
}

module.exports = string4;
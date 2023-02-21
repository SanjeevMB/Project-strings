
// ==== String Problem #3 ====

// Given a string in the format of "10/1/2021", print the month in which the date is present in.

function string3(str){
    let arr = str.split('/');
    return arr[1];    
}

module.exports = string3;
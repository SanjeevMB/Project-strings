// ==== String Problem #2 ====

// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

function string2(str){
    let arr = str.split('.');
    return arr.map(num => +num);
}

module.exports = string2;
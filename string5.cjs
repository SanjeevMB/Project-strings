
// ==== String Problem #5 ====

// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function string5(arr){
    return arr.join(' ');
}

module.exports = string5;
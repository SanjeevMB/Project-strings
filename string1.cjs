// ==== String Problem #1 ====

// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on. Write a function to convert the given strings into their equivalent numeric format without any precision loss - 100.45, 1002.22, -123 and so on. There could be typing mistakes in the string so if the number is invalid, return 0.

function string1(str){  
    let arr = str.split('');
    let ans = '';
    let count = 0;
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === '$' || arr[index] === ','){
            continue;
        }else{
            ans += arr[index];
        }
    }
    return +ans;
}

module.exports = string1;
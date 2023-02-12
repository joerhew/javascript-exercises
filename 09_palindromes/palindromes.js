const palindromes = function (str) {
    const regex = /[^a-z]/g;
    let cleanString = str.toLowerCase().replace(regex,"");
    return cleanString.replace(regex,"")
                .split('')
                .reverse()
                .join('') === cleanString;
    // Need to evaluate whether this is a palindrome
    
};

// Do not edit below this line
module.exports = palindromes;

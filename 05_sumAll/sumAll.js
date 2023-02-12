const sumAll = function(val1, val2) {
    let startVal;
    let endVal;
    
    if (typeof val1 !== 'number' || typeof val2 !== 'number') {
        return 'ERROR';
    } else if (val1 > val2 && val2 >= 0) {
        startVal = val2;
        endVal = val1;
    } else if (val1 < val2 && val1 >= 0) {
        startVal = val1;
        endVal = val2;
    } else {
        return 'ERROR';
    }
    let sum = 0;
    while (startVal <= endVal) {
        sum += startVal;
        startVal++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

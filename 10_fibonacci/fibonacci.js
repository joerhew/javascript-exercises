const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }

    let newNum = 1;
    let sequence = [];
    for (let i = 0; i < num; i++) {
        if (!sequence[i-1] && !sequence[i-2]) {
            sequence.push(newNum);;
        } else if (!sequence[i-2]) {
            newNum = sequence[i-1]
            sequence.push(newNum);
        } else {
            newNum = sequence[i-1] + sequence[i-2];
            sequence.push(newNum);
        }

    };
    return sequence[sequence.length-1];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
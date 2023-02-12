const findTheOldest = function(arr) {
    let thisYear = new Date().getFullYear()
    const sorted = arr.sort((a,b) => (a.yearOfDeath ?? thisYear) - a.yearOfBirth < (b.yearOfDeath ?? thisYear) - b.yearOfBirth ? 1 : -1)
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

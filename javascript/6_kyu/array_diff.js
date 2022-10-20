// Elements from the first array are removed by the second array.
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

console.log(arrayDiff([1, 1, 2, 2], [1]));

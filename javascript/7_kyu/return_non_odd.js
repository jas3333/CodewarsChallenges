function noOdds(values) {
    let oddFree = [];

    values.forEach(value => {
        if (value % 2 === 0) {
            oddFree.push(value);
        }
    });

    return oddFree;
}

console.log(noOdds([0, 1, 2, 3, 4]));

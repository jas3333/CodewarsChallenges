// Get the count of how many times a number can be divided by.

function getDivisorsCount(number) {
    let count = 0;

    for (let i = 0; i <= number; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    return count;
}

console.log(getDivisorsCount(12));

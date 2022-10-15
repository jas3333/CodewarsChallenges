// Create largest number possible from passed in number


function biggestNumber(number) {
    let temp;
    let numberToString = String(number).split("");

    for (let i = 0; i < numberToString.length; i++) {
        for (let x = 0; x < numberToString.length; x++) {
            if (numberToString[i] > numberToString[x]) {
                temp = numberToString[i];
                numberToString[i] = numberToString[x];
                numberToString[x] = temp;
            }
        }
    }
    return Number(numberToString.join(''));
}

console.log(biggestNumber(1234));

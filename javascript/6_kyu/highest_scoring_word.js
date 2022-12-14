// ╭──────────────────────────────────────────────────────────╮
// │ Given a string of words, you need to find the            │
// │  highest scoring word.                                   │
// │                                                          │
// │ Each letter of a word scores points according to         │
// │  its position in the alphabet: a = 1, b = 2, c = 3 etc.  │
// │                                                          │
// │ You need to return the highest scoring word as a string. │
// │                                                          │
// │ If two words score the same, return the word that        │
// │  appears earliest in the original string.                │
// │                                                          │
// │ All letters will be lowercase and all inputs will        │
// │  be valid.                                               │
// │                                                          │
// ╰──────────────────────────────────────────────────────────╯

function high(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const stringArray = x.split(" ");
    let alphaValueArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        let alphaValue = 0;
        for (let j = 0; j < stringArray[i].length; j++) {
            alphaValue += alphabet.indexOf(stringArray[i][j]) + 1
        }

        alphaValueArray.push(alphaValue)
    }

    return stringArray[alphaValueArray.indexOf(Math.max(...alphaValueArray))]
}

console.log(high("man i need a taxi up the ubud"))





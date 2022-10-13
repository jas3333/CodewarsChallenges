//Instructions
//
//Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes of 
//all capital letters in the string.

function capitals(string) {
    let capitalIndex = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            capitalIndex.push(i);
        }
    }
    return capitalIndex;
}

console.log(capitals("HellO"));

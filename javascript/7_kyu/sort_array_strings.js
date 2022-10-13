//Write a function that takes an array of strings as an argument and 
//returns a sorted array containing the same strings, ordered from 
//shortest to longest.
//
//For example, if this array were passed as an argument:
//
//["Telescopes", "Glasses", "Eyes", "Monocles"]
//
//Your function would return the following array:
//
//["Eyes", "Glasses", "Monocles", "Telescopes"]
//
//All of the strings in the array passed to your function will be 
//different lengths, so you will not have to decide how to order 
//multiple strings of the same length.

function sortByLength(array) {
    let temp;

    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            if (array[i].length < array[x].length) {
                temp = array[i];
                array[i] = array[x];
                array[x] = temp;
            }
        }
    }
    return array;
}

let stringArray = ['Beg', 'Life', 'I', 'To'];
//let stringArray = ["Eyes", "Glasses", "Monocles", "Telescopes"];
console.log(sortByLength(stringArray));


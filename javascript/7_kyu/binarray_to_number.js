/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

function binArrayToNumber(array) {
	let number = 1;
	let sum = 0;

	for (let index = array.length; index > 0; index--) {
		if (array[index - 1] !== 0) sum += number;
		number += number;
	}
	return sum;
}
const binArray = [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1];
console.log(binArrayToNumber(binArray));

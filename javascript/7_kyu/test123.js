//Your team is writing a fancy new text editor and you've been tasked 
//with implementing the line numbering.
//
//Write a function which takes a list of strings and returns each line 
//prepended by the correct number.
//
//The numbering starts at 1. The format is n: string. Notice the colon 
//and space in between.

function number(array) {
	let lineNumbers = [];

	array.forEach((value, index) => {
		lineNumbers.push(`${index + 1} ${value}`);
	});

	return lineNumbers;
}

let story = ["Theo is a cat.", "Theo is a grouchy cat.", "One day, Theo woke up and..."];

console.log(number(story));




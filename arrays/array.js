let numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2];
//    a.	Program prints out the numbers in the array as follows:
//    1. number 4
//    2. number -5

let numberPrinter = (numbers) => {
    numbers.forEach(element =>
        console.log(`Number ${element}`));
}


//b.	Program swaps third and seventh number other way around.
let Swapper = () => {

}

// c.	Program calculates the sum of the numbers and prints out the result. 
let summaSummarum = () => {
    let total = 0;
    numbers.forEach(function (element) {
        total += element;
    });
    return total;
}
// Vastaus on 25.


//d.	Program calculates the average of the numbers and prints out the result.
// For loop ja jako on old school. Reduce on moderni ratkaisu ongelmaan.
let theAvereger = (numbers) => {
    numbers.reduce((a, b) => a + b) / numbers.length;
    return numbers;
}
// e.	Program finds out the smallest number and prints it.
//ES6 baby - Note to self: Vastaus löytyi kun kuukkelilta kysyi miten löytää suurin negatiivinen numero.
let smallestNumber = Math.min(...numbers);

// f.	Program asks one number from the user and then counts how many times that number is in the array. Program prints out the result.


// g.	Program prints out all the numbers that are in the array before 0.
// käytä sorttia. 

// h.	Program counts how many numbers there are after 0 and prints out the result.
// sorttia?

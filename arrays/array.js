let numbers = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2];
//    a.	Program prints out the numbers in the array as follows:
//    1. number 4
//    2. number -5

let numberPrinter = (numbers) => {
    numbers.forEach(element =>
        console.log(`Number ${element}`));
}


//b.	Program swaps third and seventh number other way around.
// // MDN: Destructuring Assigment => Swapping Variables.
let Swapper = (numbers) => {
    [numbers[3], numbers[7]] = [numbers[7], numbers[3]];
    console.log(numbers);
}


// c.	Program calculates the sum of the numbers and prints out the result. 
// Vastaus on 25.

let summaSummarum = () => {
    let total = 0;
    numbers.forEach(function (element) {
        total += element;
    });
    return total;
}


//d.	Program calculates the average of the numbers and prints out the result.
// For loop ja jako on old school. Reduce on moderni ratkaisu ongelmaan.
let theAvereger = (numbers) => {
    numbers.reduce((a, b) => a + b) / numbers.length;
    return numbers;
}
// e.	Program finds out the smallest number and prints it.
//ES6 baby - Note to self: Vastaus löytyi kun kuukkelilta kysyi miten löytää suurin negatiivinen numero.
let smallestNumber = Math.min(...numbers);

// f.	Program asks one number from the user and 
// then counts how many times that number is in the array. 
// Program prints out the result.
// tää antaa 7 joka toistuu, mut ei vastaa open tehtävänantoa.
let peekingTom = (numbers) => {
    let array = [];
    let result = [];

    numbers.forEach(number => {
        if (!array[number])
            array[number] = 0;
        array[number] += 1;
    })
    for (let prop in array) {
        if (array[prop] >= 2) {
            result.push(prop)
        }
    }
    return result;
}

// g.	Program prints out all the numbers that are in the array before 0.
// Jos tehtävän anto olisi vain löytää 0 eli index numero 6 niin homman vois tehdä slicellä.
// Mutta minä haluan nuo negatiiviset numerot, koska se on haastavampi.
// tässä on ongelama se että riippuen miten koodi kirjoitettu, 0 = false. koska javascript kieli.
// Value ottaa jokaisen indexin ja määrittelee sen omaksi arvokseen.
// MDN: Array.filter JA Array.values
let fromHelltoZero = () => {
    return numbers.filter(value => value < 0)
}

// h.	Program counts how many numbers there are after 0 and prints out the result.
let fromZerotoHero = () => {
    return numbers.filter(value => value > 0)
}
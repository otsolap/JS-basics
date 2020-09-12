console.log('conditions work!');

// Make a program that asks age of the user. 
// If the age is less than 18 the text “too young” is printed. 
// If the age is less than 27 the text “Right age for military service” is printed.
//  If the age is less than 41 the text “You are in reserve” is printed.  
// If the age is less than 55 the text “You are in backup reserve” is printed. 
// All other cases “too aged” is printed.

let howOld = (num) => {
    if(num < 18 ) {
        console.log('too young, newb!')
    } else if (num < 27) {
        console.log('right age for the military, son!')
    } else if (num < 41) {
        console.log('Getting old there mister.')
    } else if (num < 55) {
        console.log('Ok boomer.')
    } else if (num > 55)
    console.log('how the fuck are you not dead?')
}


// Make a program that asks three numbers from the user. 
// Program prints out sum of the numbers, if any of the numbers is positive. 
// If all the numbers are positive, also print out multiplication. 
// If all numbers are negative, text “only negatives” is printed. 
// Handle zero as positive in this assignment.

let threeNumbers = (x, y, z) => {    
    if(Math.sign(x) !==1 || Math.sign(y) !==1 || Math.sign(z) !==1) {
        console.log(x+y+z);
    } else if (Math.sign(x, y, z) == 1) {
        console.log(x+y+z);
        console.log(x*y*z); 
    } else if (Math.sign(x, y, z) == 0) {
        Math.abs(0)
    } else if (Math.sign(x, y, z) == -1) {
        console.log('why so negative?')
    } 
}



// Make a program that asks one number from the user. 
// Then the program finds out if the number is 
// positive and is the number divisible by 2.

let oneNumbah = (num) => {
    if (Math.sign(num) == 1 && num % 2 === 0) {
        console.log('This number is both positive and diviable')
    }  else if (Math.sign(num) !== 1) {
            console.log('This is not a positive number!')
        } else if (Math.sign(num) == 1 && num % 2  !== 0) {
                console.log('Sorry we cannot divide this by 2.')
            }
        }

//Make a program that asks hourly salary and how many hours user worked on one day. 
//With this information program calculates day’s salary.
// The salary is calculated as follows:
// first 7 hours by hourly salary
// next 2 hours 50% extra
// rest of the hours 100% extra

let Salaryhours = (num) => {
    let salary = 13;
    let twoHourbenefit = (salary * 7) + ((salary * 2) *0.5)
    let amazingbenefitHours = num -9
    let amazingBenefit = (salary * 7) + ((salary * 2) *0.5) + (amazingbenefitHours*(salary *2 ));

    if(num <= 7) {
        console.log(`your salary for today is ${salary * num} euros.`)
    } else if (num <= 9) {
        console.log(`Your salary for today is ${twoHourbenefit} euros. `)
    } else if (num > 9) {
        console.log(`Wow! Your salary for today is ${amazingBenefit} `)
    }
}
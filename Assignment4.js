/* 1.Exercise:

Given string = “This is Portnov courses”
Extract “Portnov” from the given string

Solution:*/

let string = 'This is Portnov courses';
let substring = string.substring(8,15);

console.log(substring);


/* 2.Exercise:

Give dates
date1 = 7/9/1981
date2 = 7/9/2000
Calculate number of days between these dates

Solution:*/

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return `The number of days between ${date1} and ${date2} is: ${diffInDays}`;
}


console.log(getNumberOfDays("7/9/1981", "7/9/2000"));


/* 3.Exercise:

Refactor calculator with switch operator

Solution:*/

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    switch (true) {
        case isNaN(diffInDays):
            console.log('Invalid date format. Please provide valid date strings.');
            return null;
        case diffInDays === 0:
            console.log('The start and end dates are the same.');
            break;
        default:
            console.log(`The number of days between ${date1} and ${date2} is: ${diffInDays}`);
            break;
    }

    return diffInDays;
}

console.log(getNumberOfDays("7/9/1981", "7/9/2000"));


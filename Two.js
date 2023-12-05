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
    return diffInDays;
    console.log(`The number of days between ${date1} and ${date2} is: ${diffInDays}`);
}


console.log(getNumberOfDays("7/9/1981", "7/9/2000"));


/* 3.Exercise:

Refactor calculator with switch operator

Solution:*/

function getDateComponents(dateString) {
    const [month, day, year] = dateString.split('/').map(Number);
    return { day, month, year };
}

function dateDiffInDays(date1, date2) {
    const d1 = getDateComponents(date1);
    const d2 = getDateComponents(date2);

    let daysDiff = 0;

    switch (true) {
        case d1.year !== d2.year:
            daysDiff += (d2.year - d1.year) * 365;
            break;

        case d1.month !== d2.month:
            daysDiff += (d2.month - d1.month) * 30;
            break;

        default:
            daysDiff += d2.day - d1.day;
            break;
    }

    return daysDiff;
}

// Example usage
const date1 = '7/9/1981';
const date2 = '7/9/2000';

const daysDifference = dateDiffInDays(date1, date2);
console.log(`The number of days between ${date1} and ${date2} is: ${daysDifference}`);
//test
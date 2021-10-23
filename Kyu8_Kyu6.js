
//6 kyu https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript

function getDay(day, isLeap){
    const months = ['January, ', 'February, ', 'March, ', 'April, ', 'May, ', 'June, ', 'July, ',
        'August, ', 'September, ', 'October, ', 'November, ', 'December, '];
    const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap) monthsDays[1] = 29;
    for (let i = 0; i < 12; i++) {
        if (day <= monthsDays[i]) return months[i] + day;
        else day -= monthsDays[i];
    }
}

console.log(getDay(15, false)); //("January, 15")
console.log(getDay(41, false)); //("February, 10")
console.log(getDay(59, false)); //("February, 28")
console.log(getDay(60, false)); //("March, 1")
console.log(getDay(60, true));  //("February, 29")
console.log(getDay(365, false)); //("December, 31")
console.log(getDay(366, true)); //("December, 31")

// 6 kyu  https://www.codewars.com/kata/55e2adece53b4cdcb900006c

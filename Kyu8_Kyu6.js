
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

console.log("------------- NEXT KATA -----------" )
// 6 kyu  https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
    if (v1 > v2) return null;
    let time = Math.trunc(g * 3600 / (v2 - v1));
    let sec = (time % 60);
    let hour = Math.trunc(g / (v2 - v1));
    let min = (time - sec - (hour * 3600)) / 60;

    return [hour, min, sec]
}

console.log(race(720, 850, 70)); //[0, 32, 18])
console.log(race(80, 91, 37)); // [3, 21, 49])
console.log(race(80, 100, 40)); // [2, 0, 0])

console.log("------------- NEXT KATA -----------" )

// 7 kyu   https://www.codewars.com/kata/5e2596a9ad937f002e510435

function infected(s) {
    const arr = s.split('X');
    let count1 = 0;
    let count0 = 0;
    for (let el of arr) {

        if (el.includes('1')) {
            count1 += el.length;
        } else count0 += el.length;
    }
    if (count1 == 0) return 0;
    return count1 * 100 / (count1 + count0);
}

console.log( infected("01000000X000X011X0X")); // 73.33333333333333;
console.log( infected("01X000X010X011XX")); //  72.72727272727273;
console.log( infected("XXXXX")); //  0;
console.log( infected("0000000010")); //  100;
console.log( infected("X00X000000X10X0100")); //  42.857142857142854;

console.log("------------- NEXT KATA -----------" )

// 6 kyu   https://www.codewars.com/kata/522551eee9abb932420004a0

function nthFibo(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return (nthFibo(n-1) + nthFibo(n-2));
}

console.log(nthFibo(1)); // 0;
console.log(nthFibo(2)); // 1;
console.log(nthFibo(3)); // 1;
console.log(nthFibo(4)); // 2;

console.log("------------- NEXT KATA -----------" )

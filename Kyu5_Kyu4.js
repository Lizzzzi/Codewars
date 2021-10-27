
// 5 kyu   https://www.codewars.com/kata/577e9095d648a15b800000d4

function postfixEvaluator(string) {
    let arr = string.split(' ');
    while (arr.length > 1) {
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]==='+' || arr[i]==='-' || arr[i]==='*' || arr[i]==='/') {
                let a = Number(arr[i-2]);
                let b = Number(arr[i-1]);
                let res = arr[i]==='+'? a+b : arr[i]==='-'? a-b : arr[i]==='*'? a*b : Math.trunc(a/b);
                arr.splice(i-2, 3, res);
                break;
            }
        }
    }
    return arr[0];
}

console.log( postfixEvaluator("2 3 +")); //  5

console.log("------------- NEXT KATA -----------" )

// 5 kyu   https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
    if (g % 2) return null;
    let firstNum = 0;
    first: for (let i = m; i <= n; i++) {
        if (i % 2) {
            let sqr = Math.sqrt(i);
            for (let j = 3; j <= sqr; j += 2 ) {
                if (i % j === 0) continue first;
            }
            if (i - firstNum === g) return [firstNum, i];
            else firstNum = i;
        }
    }
    return null;
}

console.log(gap(2,100,110)); // [101, 103]);
console.log(gap(4,100,110)); // [103, 107]);
console.log(gap(6,100,110)); // null);
console.log(gap(8,300,400)); // [359, 367]);
console.log(gap(10,300,400)); // [337, 347]);

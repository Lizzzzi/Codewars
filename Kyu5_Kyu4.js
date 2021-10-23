
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


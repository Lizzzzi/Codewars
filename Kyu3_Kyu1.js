// 3 kyu https://www.codewars.com/kata/5376b901424ed4f8c20002b7

//VariantA Calculate a pair of closest points in linearithmic time
function closestPairA(points) {

    const sortedP = points.sort((a, b) => a[0]-b[0]);

    //let minArr = [points[0], points[1]];
    let d = ((sortedP[0][0] - sortedP[1][0])** 2 + (sortedP[0][1] - sortedP[1][1])** 2);
    let minPair = [sortedP[0], sortedP[1]];
    let filtredD = [sortedP[0], sortedP[1]];

    for (let i = 2; i < sortedP.length; i++) {
        let x = sortedP[i][0];
        let y = sortedP[i][1];
        filtredD = filtredD.filter(el => ((el[0] - x)** 2) < d );

        for (let j = 0; j < filtredD.length; j++) {

            if ((filtredD[j][1] - y) ** 2 < d) {
                let dist = (filtredD[j][0] - x)** 2 + (filtredD[j][1] - y)** 2;
                if (dist < d) {
                    d = dist;
                    minPair = [filtredD[j], sortedP[i]];
                }
            }
        }

        filtredD.push(sortedP[i]);
    }

    return minPair;
}

//VariantB Calculate a pair of closest points in linearithmic time
function closestPairB(p) {
    const X = 0, Y = 1;
    var dis, res, min = 1e20;
    p = p.sort( (a, b) => a[X] - b[X] );
    for (var a = 0; a < p.length-1; a++)
        for (var b = a + 1; b < p.length && (p[b][X] - p[a][X]) ** 2 < min; b++) {
            dis = (p[b][X] - p[a][X]) ** 2 + (p[b][Y] - p[a][Y]) ** 2;
            if (dis < min){
                min = dis;
                res = [p[a], p[b]];
            } }
    return res
}

//VariantC Calculate a pair of closest points in linearithmic time
function closestPairC(points) {

    const sortedP = points.sort((a, b) => a[0]-b[0]);

    //let minArr = [points[0], points[1]];
    let d = ((sortedP[0][0] - sortedP[1][0])** 2 + (sortedP[0][1] - sortedP[1][1])** 2);
    let minPair = [sortedP[0], sortedP[1]];
    let filtredD = [sortedP[0], sortedP[1]];

    for (let i = 2; i < sortedP.length; i++) {
        let x = sortedP[i][0];
        let y = sortedP[i][1];
        filtredD = filtredD.filter(el => ((el[0] - x)** 2) < d );

        for (let j = 0; j < filtredD.length; j++) {

            if ((filtredD[j][1] - y) ** 2 < d) {
                let dist = (filtredD[j][0] - x)** 2 + (filtredD[j][1] - y)** 2;
                if (dist < d) {
                    d = dist;
                    minPair = [filtredD[j], sortedP[i]];
                }
            }
        }

        filtredD.push(sortedP[i]);
    }

    return minPair;
}

console.log("------------- NEXT KATA -----------" )

// 3 kyu  https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(field) {
    let sum = 0;
    for (let el of field) {
        sum += el.reduce((akk, item) => akk += item);
    }
    if (sum !== 20) return false;

    let battl = 1;
    let cru = 2;
    let dest = 3;
    let sub = 4;

    const arr = [];
    for (let i = 0; i <= 9; i++) {
        let shipLength = 0;
        for (let j = 0; j <= 9; j++) {

            if (field[i][j] === 1) {
                if (field[i][j+1] === 1 || field[i][j-1] === 1) {
                    shipLength++
                    arr.push(i*10 + j);
                }
            }

            if (field[i][j] === 0 && field[i][j-1] === 1 && shipLength !== 0) {
                switch (shipLength) {
                    case 4: battl--;
                        break;
                    case 3: cru--;
                        break;
                    case 2: dest--;
                        break;
                    default: return false;
                }
                if (battl<0 || cru<0 || dest<0 || sub<0) return false;

                if (i !== 0 && i !== 9) {
                    for (let k = j; k >= j-shipLength-1; k--) {
                        if (field[i-1][k] === 1 || field[i+1][k] === 1) return false;
                    }
                } else if (i === 0) {
                    for (let k = j; k >= j-shipLength-1; k--) {
                        if (field[i+1][k] === 1) return false;
                    }
                } else if (i === 9) {
                    for (let k = j; k >= j-shipLength-1; k--) {
                        if (field[i-1][k] === 1) return false;
                    }
                }
                shipLength = 0;
            }
        }
    }

    for (let j = 0; j <= 9; j++) {
        let shipLength = 0;
        let ref = false;
        for (let i = 0; i <= 9; i++) {

            if (field[i][j] === 1 && !arr.includes(i*10 + j)) {
                shipLength++;
                if (i === 0) ref = true;
            }
            if (field[i][j] === 0 && i !== 0 && field[i - 1][j] === 1) {
                switch (shipLength) {
                    case 4: battl--;
                        break;
                    case 3: cru--;
                        break;
                    case 2: dest--;
                        break;
                    case 1: sub--;
                        break;
                    case 0: break;
                    default: return false;
                }
                if (battl<0 || cru<0 || dest<0 || sub<0) return false;

                if (shipLength !== 0) {
                    for (let k = i; k >= i-shipLength; k--) {
                        if (field[k][j-1] === 1 || field[k][j+1] === 1) return false;
                    }
                    if (ref === false) {
                        if (field[i-shipLength-1][j-1] === 1 || field[i-shipLength-1][j+1] === 1) return false;
                    }
                }
                shipLength = 0;
                ref = false;
            }
        }
    }
    if (battl !== 0 || cru !== 0 || dest !== 0 || sub !== 0) return false;

    return true;
}

       console.log(validateBattlefield(   // true
            [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));

console.log("------------- NEXT KATA -----------" )



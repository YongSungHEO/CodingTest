/*
    25! = 25 * 24 * ... * 3 * 2 * 1
*/

function extraLongFactorials(n) {
    let result = BigInt(1);
    for (let i = BigInt(n); i > 0; i--) {
        result *= i;
    }
    console.log(BigInt(result).toString());
}

extraLongFactorials(25);

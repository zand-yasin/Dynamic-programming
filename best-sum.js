var start = process.hrtime();

var prnt = function (note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}

const bestSum = (num, array, memo = {}) => {
    if (num in memo) return memo[num];
    if (num == 0) return [];
    if (num < 0) return null;
    let best = null;
    for (let n of array) {
        const data = bestSum(num - n, array, memo);
        if (data != null) {
            let temp = [...data, n];

            if (best === null || best.length > temp.length) {
                best = temp;
            }
        }
    }

    memo[num] = best;

    return best;
}
prnt(bestSum(8, [2, 3, 5])); // true
prnt(bestSum(7, [2, 3])); // true
prnt(bestSum(7, [5, 3, 4, 7]));  //true
prnt(bestSum(7, [2, 4]));  //false
prnt(bestSum(322, [7, 14, 2, 3]));  //false
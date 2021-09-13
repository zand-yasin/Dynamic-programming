
var start = process.hrtime();

var prnt = function (note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}

const canSum = (num, array, memo = {}) => {


    console.log(num)

    // if (num in memo) return memo[num];
    if (num == 0) return true;
    if (num < 0) return false;

    for (let element of array) {
        if (canSum(num - element, array, memo)) {
            memo[num] = true;
            return true;
        }
    }
    memo[num] = false;
    return false
}


prnt(canSum(8, [2, 3, 5])); // true
// prnt(canSum(7, [2, 3])); // true
// prnt(canSum(7, [5, 3, 4, 7]));  //true
// prnt(canSum(7, [2, 4]));  //false
// prnt(canSum(8, [2, 3, 5]));  //true
// prnt(canSum(30300, [7, 14]));  //false
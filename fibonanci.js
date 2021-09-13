
var start = process.hrtime();

var elapsed_time = function (note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}


const fib = (n, memo = {}) => {
    if (n in memo)
        return memo[n];
    if (n <= 2) return 1;
    let m = fib(n - 1, memo) + fib(n - 2, memo);
    memo[m] = m;
    return memo[m]
}

elapsed_time(fib(52));
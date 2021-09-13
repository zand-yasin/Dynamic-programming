
var start = process.hrtime();

var elapsed_time = function (note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}

const gridCycles = (i, j, memo = {}) => {

    const key = i + "," + j;
    if (key in memo)
        return memo[key]

    if (!i || !j)
        return 0;
    if (i == 1 && j == 1) return 1;
    memo[key] = gridCycles(i - 1, j, memo) + gridCycles(i, j - 1, memo);
    return memo[key];
}

elapsed_time(gridCycles(1380, 1380));
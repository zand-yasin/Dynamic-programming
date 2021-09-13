const arr = [5, 3, 8, 4, 2, 1, 77, 99, 5, 6, 3, 21, 4, 98, 1];

var max1 = 0;
var max2 = 0;
var max3 = 0;

for (let i = 0; i < arr.length; i++) {

    if (max3 < arr[i])
        max3 = arr[i];

    if (max3 > max2) {
        let temp = max3;
        max3 = max2;
        max2 = temp;
    }
    if (max2 > max1) {
        let temp = max2;
        max2 = max1;
        max1 = temp;
    }


}

console.log(max1);
console.log(max2);
console.log(max3);
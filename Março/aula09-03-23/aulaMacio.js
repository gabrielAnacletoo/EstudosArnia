let numbers = [5,32,1,838,34,2,5,9,8,2,98,42,64];

let numbersDesc = numbers.sort(function(a, b) {
    return b - a;
});
console.table(numbersDesc); // [838, 98, 64, 42, 34, 32, 9, 8, 5, 5, 2, 2, 1]
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; // Add the last digit to sum
        number = Math.floor(number / 10); // Remove the last digit
    }
    return sum;
}

function fancySolve(number) {
    return String(number)
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
}

// Test cases
console.log(fancySolve(245678)); // Output: 32
console.log(fancySolve(97561));  // Output: 28
console.log(fancySolve(543));    // Output: 12
function sumEvenOddDigits(number) {
    const digits = String(number).split('').map(Number);
    const evenSum = digits
        .filter(digit => digit % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0);
    const oddSum = digits
        .filter(digit => digit % 2 !== 0)
        .reduce((acc, curr) => acc + curr, 0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Test cases
sumEvenOddDigits(1000435); // Output: Odd sum = 9, Even sum = 4
sumEvenOddDigits(3495892137259234); // Output: Odd sum = 54, Even sum = 22

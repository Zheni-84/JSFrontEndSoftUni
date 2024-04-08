solve(1000435);

function solve(number) {
    const evenSum = calculateDigitSum(number, x => x % 2 === 0);
    const oddSum = calculateDigitSum(number, x => x % 2 !== 0);

    printResult(oddSum, evenSum);
}

function calculateDigitSum(number, filter) {
    return number
        .toString()
        .split('')
        .map(Number)
        .filter(filter)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

function printResult(oddSum, evenSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
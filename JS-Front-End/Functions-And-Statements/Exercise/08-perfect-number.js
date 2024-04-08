function solve(number) {
    const calculateSum = numbers => numbers.reduce((a, b) => a + b, 0);
    const isPerfect = num => calculateSum(getDivisors(num)) === num;

    isPerfect(number) ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}

function getDivisors(number) {
    const divisors = [];
    for (let i = number - 1; i >= 0; i--) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// Judge time limit exceeded on last test!
function fancySolve(number) {
    if (number <= 0) {
        return "It's not so perfect.";
    }

    const sum = Array.from({length: number - 1}, (_, index) => index + 1)
        .filter(divisor => number % divisor === 0)
        .reduce((acc, divisor) => acc + divisor, 0);

    sum === number ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}

fancySolve(6);
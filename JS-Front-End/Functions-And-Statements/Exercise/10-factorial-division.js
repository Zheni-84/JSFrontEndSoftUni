function solve(a, b) {
    const result = calculateFactorial(a) / calculateFactorial(b);
    console.log(result.toFixed(2));
}

function calculateFactorial(number) {
    if (number <= 1) {
        return 1;
    }
    return number * calculateFactorial(number - 1)
}

function calculateFactorialDivision(num1, num2) {
    console.log((calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2));
}

function calculateFactorial2(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

calculateFactorialDivision(5, 2); //60.00
calculateFactorialDivision(6, 2); // 360.00
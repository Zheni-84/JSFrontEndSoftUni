function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            console.log('Invalid operator');
            return;
    }

    console.log(result.toFixed(2));
}

// Test cases
calculate(5, '+', 10); // Output: 15.00
calculate(25.5, '-', 3); // Output: 22.50

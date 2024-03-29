function solve(operand1, operand2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '%':
            result = operand1 % operand2;
            break;
        case '**':
            result = operand1 ** operand2;
            break;
    }
    console.log(result)
}

solve(5, 6, '+');
solve(3, 5.5, '*');
solve(2, 5, '**');
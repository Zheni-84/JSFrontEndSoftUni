function checkSameDigitsAndSum(number) {
    const digits = String(number).split('').map(Number);
    const isSame = digits.every(digit => digit === digits[0]);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    console.log(isSame);
    console.log(sum);
}

// Test cases
checkSameDigitsAndSum(2222222); // Output: true \n 14
checkSameDigitsAndSum(14);      // Output: false \n 5
checkSameDigitsAndSum(10);      // Output: false \n 1

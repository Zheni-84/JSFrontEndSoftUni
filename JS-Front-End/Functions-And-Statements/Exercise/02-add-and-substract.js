function subtract(num1, num2, num3) {
    const sum = (a, b) => a + b;
    return sum(num1, num2) - num3;
}

// Test cases
console.log(subtract(23, 6, 10)); // Output: 19
console.log(subtract(1, 17, 30)); // Output: -12
console.log(subtract(42, 58, 100)); // Output: 0

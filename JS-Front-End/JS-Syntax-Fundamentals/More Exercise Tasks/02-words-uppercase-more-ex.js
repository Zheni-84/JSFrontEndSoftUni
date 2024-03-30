function extractAndConvertToUpperCase(str) {
    // Use a regular expression to match words
    const words = str.match(/\b\w+\b/g);

    // Convert words to uppercase and join them with ", "
    return words
        .map(word => word.toUpperCase())
        .join(', ');
}

// Test cases
console.log(extractAndConvertToUpperCase('Hi, how are you?')); // Output: HI, HOW, ARE, YOU
console.log(extractAndConvertToUpperCase('hello')); // Output: HELLO

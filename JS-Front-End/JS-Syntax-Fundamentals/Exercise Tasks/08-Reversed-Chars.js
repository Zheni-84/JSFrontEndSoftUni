function printReversedChars(...chars) {
    const reversedString = chars.reverse().join(' ');
    console.log(reversedString);
}

// Test cases
printReversedChars('A', 'B', 'C'); // Output: C B A
printReversedChars('1', 'L', '&'); // Output: & L 1

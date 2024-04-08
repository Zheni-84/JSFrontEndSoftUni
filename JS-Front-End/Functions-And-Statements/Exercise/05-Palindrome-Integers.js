function checkPalindromes(numbers) {
    const isPalindrome = num => String(num) === String(num)
        .split('')
        .reverse()
        .join('');
    numbers.forEach(num => console.log(isPalindrome(num)));
}

// Test cases
checkPalindromes([123, 323, 421, 121]); // Output: false, true, false, true
checkPalindromes([32, 2, 232, 1010]); // Output: false, true, true, false

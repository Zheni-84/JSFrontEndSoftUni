function combineCharacters(char1, char2, char3) {
    const combinedString = [char1, char2, char3].reduce((acc, char) => acc + char, '');
    console.log(combinedString);
}

function combineCharacters2(char1, char2, char3) {
    const combinedString = ''.concat(char1, char2, char3);
    console.log(combinedString);
}

function combineCharacters3(char1, char2, char3) {
    const combinedString = [char1, char2, char3].join('');
    console.log(combinedString);
}

function combineCharacters4(char1, char2, char3) {
    const combinedString = `${char1}${char2}${char3}`;
    console.log(combinedString);
}

// Test cases
combineCharacters('a', 'b', 'c'); // Output: abc
combineCharacters('%', '2', 'o'); // Output: %2o
combineCharacters('1', '5', 'p'); // Output: 15p

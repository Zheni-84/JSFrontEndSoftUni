function findWord(word, text) {
    const lowerWord = word.toLowerCase();
    const lowerText = text.toLowerCase();
    const lowerWords = lowerText.split(' ');

    for (const element of lowerWords) {
        if (element === lowerWord) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

// Test cases
findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');

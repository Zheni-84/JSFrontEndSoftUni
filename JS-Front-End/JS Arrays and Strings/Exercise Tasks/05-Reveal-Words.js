function replaceWords(wordsString, templateString) {
    const words = wordsString.split(', ');
    const template = templateString.split(' ');

    const result = template.map(word => {
        if (word.includes('*')) {
            const wordLength = word.length;
            const replacement = words.find(w => w.length === wordLength);
            return word.replace('*'.repeat(wordLength), replacement);
        }
        return word;
    });

    return result.join(' ');
}

// Test cases
console.log(replaceWords('great', 'softuni is ***** place for learning new programming languages'));
console.log(replaceWords('great, learning', 'softuni is ***** place for ******** new programming languages'));

function findSpecialWords(input) {
    const words = input.split(' ');

    words.forEach(word => {
        if (word.startsWith('#')) {
            const specialWord = word.substring(1);
            if (/^[a-zA-Z]+$/.test(specialWord)) {
                console.log(specialWord);
            }
        }
    });
}

// Test case
findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');

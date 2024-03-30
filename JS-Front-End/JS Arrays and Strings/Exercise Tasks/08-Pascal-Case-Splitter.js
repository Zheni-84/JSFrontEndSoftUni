function splitPascalCase(string) {
    let words = [];
    let startIndex = 0;

    for (let i = 1; i < string.length; i++) {
        if (string[i] >= 'A' && string[i] <= 'Z') {
            words.push(string.substring(startIndex, i));
            startIndex = i;
        }
    }

    words.push(string.substring(startIndex));

    console.log(words.join(', '));
}

function fancySolve(string) {
    const words = string.match(/[A-Z][a-z]*/g).join(', ');
    console.log(words);
}

// Test cases
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo');
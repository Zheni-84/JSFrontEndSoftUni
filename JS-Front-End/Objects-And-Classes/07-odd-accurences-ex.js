function solve(input) {
    const words = input.split(' ');
    const wordOccurances = {};
    for (const word of words) {
        const wordLowerCase = word.toLowerCase();
        if (!wordOccurances.hasOwnProperty(wordLowerCase)) {
            wordOccurances[wordLowerCase] = 0;
        }
        wordOccurances[wordLowerCase]++;
    }
    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            result.push(word);

        }
    }
    console.log(result.join(' '));
}

function fancySolve(input) {
    const occurances = input
        .toLowerCase()
        .split(' ')
        .reduce((acc, word) =>
                acc.hasOwnProperty(word)
                    ? {...acc, [word]: acc[word] + 1}
                    : {...acc, [word]: 1}
            , {})
    const result = Object
        .entries(occurances)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word, count]) => word)
        .join(' ');
    console.log(result);
}

fancySolve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
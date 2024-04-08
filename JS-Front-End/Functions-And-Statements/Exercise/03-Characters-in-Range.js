function printCharactersBetween(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    let result = '';
    for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result.trim());
}

function fancySolve (char1, char2) {
    const start = char1.charCodeAt(0);
    const end = char2.charCodeAt(0);

    const charactersInRange = String
        .fromCharCode(...Array
            .from({ length: Math.abs(end - start) - 1 }, (_, i) => Math.min(start, end) + i + 1));
    console.log(charactersInRange.split('').join(' '));
}

// Test cases
fancySolve('a', 'd'); // Output: b c
printCharactersBetween('#', ':'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
fancySolve('C', '#'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B

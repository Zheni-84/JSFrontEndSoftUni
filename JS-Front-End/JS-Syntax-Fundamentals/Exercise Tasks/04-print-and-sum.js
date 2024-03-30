function displayNumbersAndSum(start, end) {
    let numbers = [];
    let sum = 0;

    for (let i = start; i <= end; i++) {
        numbers.push(i);
        sum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

function fancySolve(start, end) {
    let arrayLike = { length: end - start + 1 };
    const numbers = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

// Test cases
fancySolve(5, 10); // Output: 5 6 7 8 9 10
//         Sum: 45
fancySolve(0, 26); // Output: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
//         Sum: 351
fancySolve(50, 60); // Output: 50 51 52 53 54 55 56 57 58 59 60
//         Sum: 605

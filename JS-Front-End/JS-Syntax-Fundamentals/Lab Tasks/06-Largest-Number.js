function solve(...numbers) {
    let largestNumber = numbers[0];
    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }
    console.log(`The largest number is ${largestNumber}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);
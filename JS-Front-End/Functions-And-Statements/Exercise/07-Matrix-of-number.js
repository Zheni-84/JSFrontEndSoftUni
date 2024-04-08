function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += `${n} `;
        }
        console.log(row.trim());
    }
}

function fancySolve(n) {
    Array(n).fill('').forEach(() => console.log(Array(n).fill(n).join(' ')));
}

// Test cases
fancySolve(3);
fancySolve(7);
printMatrix(2);

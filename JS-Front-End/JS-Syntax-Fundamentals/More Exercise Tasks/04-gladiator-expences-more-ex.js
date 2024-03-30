function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let helmetBreaks = 0;
    let swordBreaks = 0;
    let shieldBreaks = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetBreaks++;
        }
        if (i % 3 === 0) {
            swordBreaks++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBreaks++;
        }
    }

    expenses = (helmetBreaks * helmetPrice) + (swordBreaks * swordPrice) + (shieldBreaks * shieldPrice);
    if (shieldBreaks > 0) {
        expenses += Math.floor(shieldBreaks / 2) * armorPrice;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// Test cases
calculateExpenses(7, 2, 3, 4, 5); // Output: Gladiator expenses: 16.00 aureus
calculateExpenses(23, 12.50, 21.50, 40, 200); // Output: Gladiator expenses: 608.00 aureus

function spiceMining(startingYield) {
    let totalSpice = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= 26;
        startingYield -= 10;
        days++;
    }

    // Additional consumption after the mine has been exhausted
    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(days);
    console.log(totalSpice);
}

// Test cases
spiceMining(111); // Output: 2\n 134
spiceMining(450); // Output: 36\n 8938

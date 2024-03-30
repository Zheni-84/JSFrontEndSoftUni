function printSortedNames(names) {
    const sortedNames = names.slice().sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}

// Test case
printSortedNames(["John", "Bob", "Christina", "Ema"]);
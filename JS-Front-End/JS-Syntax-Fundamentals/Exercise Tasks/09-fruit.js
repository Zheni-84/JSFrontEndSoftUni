function calculateFruitCost(fruitType, weightInGrams, pricePerKilogram) {
    const totalCost = (weightInGrams / 1000 * pricePerKilogram).toFixed(2);
    const weightInKilograms = (weightInGrams / 1000).toFixed(2);
    console.log(`I need $${totalCost} to buy ${weightInKilograms} kilograms ${fruitType}.`);
}

// Test cases
calculateFruitCost('orange', 2500, 1.80); // Output: I need $4.50 to buy 2.50 kilograms orange.
calculateFruitCost('apple', 1563, 2.35);  // Output: I need $3.67 to buy 1.56 kilograms apple.

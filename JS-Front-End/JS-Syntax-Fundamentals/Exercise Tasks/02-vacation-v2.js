function calculateTotalPrice(people, groupType, dayOfWeek) {
    // Prices for Students, Business, and Regular groups, respectively
    const studentPrices = [8.45, 9.80, 10.46];
    const businessPrices = [10.90, 15.60, 16];
    const regularPrices = [15, 20, 22.50];

    let pricePerPerson;

    // Determine the price per person based on the group type and day of the week
    switch (groupType) {
        case 'Students':
            pricePerPerson = studentPrices[getDayIndex(dayOfWeek)];
            break;
        case 'Business':
            pricePerPerson = businessPrices[getDayIndex(dayOfWeek)];
            break;
        case 'Regular':
            pricePerPerson = regularPrices[getDayIndex(dayOfWeek)];
            break;
    }

    // Calculate the total price
    let totalPrice = people * pricePerPerson;

    // Apply discounts based on the given conditions
    if (groupType === 'Students' && people >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === 'Business' && people >= 100) {
        totalPrice -= (10 * pricePerPerson); // 10 people stay for free
    } else if (groupType === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// Function to get the index of the day in the week
function getDayIndex(day) {
    switch (day) {
        case 'Friday':
            return 0;
        case 'Saturday':
            return 1;
        case 'Sunday':
            return 2;
    }
}

// Test cases
calculateTotalPrice(30, 'Students', 'Sunday'); // Output: Total price: 266.73
calculateTotalPrice(40, 'Regular', 'Saturday'); // Output: Total price: 800.00

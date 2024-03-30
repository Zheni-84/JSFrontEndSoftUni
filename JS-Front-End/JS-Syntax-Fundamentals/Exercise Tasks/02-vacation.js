function calculateTotalPrice(people, groupType, dayOfWeek) {
    let pricePerPerson;

    // Determine the price per person based on the group type and day of the week
    switch (groupType) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.80;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 10.90;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.60;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.50;
                    break;
            }
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

// Test cases
calculateTotalPrice(30, 'Students', 'Sunday'); // Output: Total price: 266.73
calculateTotalPrice(40, 'Regular', 'Saturday'); // Output: Total price: 800.00

function calculateTotalPrice(people, groupType, dayOfWeek) {
    const studentPrices = [8.45, 9.80, 10.46];
    const businessPrices = [10.90, 15.60, 16];
    const regularPrices = [15, 20, 22.50];

    const getPriceByGroupAndDay = () => {
        switch (groupType) {
            case 'Students':
                return studentPrices;
            case 'Business':
                return businessPrices;
            case 'Regular':
                return regularPrices;
        }
    };

    const getDiscount = () => {
        if (groupType === 'Students' && people >= 30) return 0.85;
        if (groupType === 'Business' && people >= 100) return -10 * getPriceByGroupAndDay()[getDayIndex(dayOfWeek)];
        if (groupType === 'Regular' && people >= 10 && people <= 20) return 0.95;
        return 1;
    };

    const getDayIndex = (day) => ['Friday', 'Saturday', 'Sunday'].indexOf(day);

    const totalPrice = people * getPriceByGroupAndDay()[getDayIndex(dayOfWeek)];

    const finalPrice = totalPrice * getDiscount();

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

// Test cases
calculateTotalPrice(30, 'Students', 'Sunday'); // Output: Total price: 266.73
calculateTotalPrice(40, 'Regular', 'Saturday'); // Output: Total price: 800.00

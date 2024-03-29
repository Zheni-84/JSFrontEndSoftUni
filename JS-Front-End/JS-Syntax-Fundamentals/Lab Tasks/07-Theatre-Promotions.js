function solve(typeOfDay, age) {
    let price;
    switch (typeOfDay) {
        case 'Weekday':
            if (age < 0 || age > 122) {
                price = 'Error!'
            } else if (age >= 0 && age <= 18) {
                price = '12$';
            } else if (age <= 64) {
                price = '18$';
            } else if (age <= 122) {
                price = '12$';
            }
            break;
        case 'Weekend':
            if (age < 0 || age > 122) {
                price = 'Error!'
            } else if (age >= 0 && age <= 18) {
                price = '15$';
            } else if (age <= 64) {
                price = '20$';
            } else if (age <= 122) {
                price = '15$';
            }
            break;
        case 'Holiday':
            if (age < 0 || age > 122) {
                price = 'Error!'
            } else if (age >= 0 && age <= 18) {
                price = '5$';
            } else if (age <= 64) {
                price = '12$';
            } else if (age <= 122) {
                price = '10$';
            }
            break;
    }
    console.log(price)
}


solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);
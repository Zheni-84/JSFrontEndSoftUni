function checkSpeed(speed, area) {
    let limit;
    if (area === 'motorway') limit = 130;
    else if (area === 'interstate') limit = 90;
    else if (area === 'city') limit = 50;
    else if (area === 'residential') limit = 20;

    const difference = speed - limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

// Test cases
checkSpeed(40, 'city');         // Output: Driving 40 km/h in a 50 zone
checkSpeed(21, 'residential');   // Output: The speed is 1 km/h faster than the allowed speed of 20 - speeding
checkSpeed(120, 'interstate');   // Output: The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

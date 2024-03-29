function solve(input) {
    const parking = {};
    for (const row of input) {
        const [direction, carNumber] = row.split(', ');
        parking[carNumber] = direction === 'IN'
    }

    const parkedCars = Object.entries(parking)
        .filter(car => car[1]);

    if (parkedCars.length === 0) {
        return console.log('Parking Lot is Empty');
    }

    parkedCars.map(car => car[0])
        //Object.keys(entries)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber))
}

function solveSet(input) {
    const parking = new Set();
    for (const row of input) {
        const [direction, carNumber] = row.split(', ');
        direction === 'IN'
            ? parking.add(carNumber)
            : parking.delete(carNumber);
    }

    if (parking.size === 0) {
        return console.log('Parking Lot is E mpty');
    }

    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car))
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// )
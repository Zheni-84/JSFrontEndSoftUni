function performOperations(number, ...operations) {
    let result = Number(number);

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result *= 0.8;
                break;
            default:
                break;
        }
        console.log(result);
    }
}

function fancySolve(number, ...operations) {
    let result = Number(number);

    const operationsMap = {
        'chop': num => num / 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num + 1,
        'bake': num => num * 3,
        'fillet': num => num * 0.8
    };

    for (let operation of operations) {
        result = operationsMap[operation](result);
        console.log(result);
    }
}

// Test cases
fancySolve('32', 'chop', 'chop', 'chop', 'chop', 'chop'); // Output: 16 \n 8 \n 4 \n 2 \n 1
fancySolve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); // Output: 3 \n 4 \n 2 \n 6 \n 4.8
function stepElements(array, step) {
    const result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }
    return result;
}

// Test cases
console.log(stepElements(['5', '20', '31', '4', '20'], 2)); // Output: ['5', '31', '20']
console.log(stepElements(['dsa', 'asd', 'test', 'tset'], 2)); // Output: ['dsa', 'test']
console.log(stepElements(['1', '2', '3', '4', '5'], 6)); // Output: ['1']

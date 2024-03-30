function rotateArray(array, rotations) {
    const rotatedArray = array
        .slice(rotations % array.length)
        .concat(array.slice(0, rotations % array.length));
    console.log(rotatedArray.join(' '));
}

// Test cases
rotateArray([51, 47, 32, 61, 21], 2); // Output: 32 61 21 51 47
rotateArray([32, 21, 61, 1], 4);      // Output: 32 21 61 1
rotateArray([2, 4, 15, 31], 5);       // Output: 4 15 31 2

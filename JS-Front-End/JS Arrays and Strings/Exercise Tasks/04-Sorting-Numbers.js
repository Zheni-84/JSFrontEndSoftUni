function alternateSort(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    const result = [];

    let left = 0, right = sortedArray.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(sortedArray[left]);
        } else {
            result.push(sortedArray[left], sortedArray[right]);
        }
        left++;
        right--;
    }

    return result;
}

function fancySolve(array) {
    return array.slice().sort((a, b) => a - b)
        .map((value, index, sortedArray) => {
            let calcIndex;
            if (index % 2 === 0) {
                calcIndex = index / 2
            } else {
                const number = Math.ceil(index / 2);
                calcIndex = sortedArray.length - number;
            }
            return sortedArray[calcIndex]
        });
}

// Test case
console.log(fancySolve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

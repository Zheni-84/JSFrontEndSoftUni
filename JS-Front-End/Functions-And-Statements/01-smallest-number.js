function solve(a, b, c) {
    const getLowestOfTwo = (a, b) => a > b ? b : a;
    const result = getLowestOfTwo(a, getLowestOfTwo(b, c));

    console.log(result);
}

solve(2, 5, 3);
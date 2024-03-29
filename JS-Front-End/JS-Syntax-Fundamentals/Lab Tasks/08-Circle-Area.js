function solve(radiusNumber) {
    let result = typeof radiusNumber;
    if (typeof radiusNumber == "number") {
        result = Math.PI * radiusNumber ** 2;
        return console.log(result.toFixed(2))
    }
    console.log(`We can not calculate the circle area, because we receive a ${result}.`)
}

solve(5);
solve('name');
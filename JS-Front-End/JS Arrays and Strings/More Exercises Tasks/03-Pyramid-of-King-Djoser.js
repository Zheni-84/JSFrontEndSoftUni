function pyramid(base, increment) {
    let steps = Math.ceil(base / 2);
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisTotal = 0;
    let goldTotal = 0;

    for (let i = 1; i <= steps; i++) {
        let stone = (base - 2) * (base - 2) * increment;
        let perimeter = 4 * (base - 1);
        let outerLayer = perimeter * increment;

        if (i === steps) {
            goldTotal = base * base * increment;
        } else {
            if (i % 5 === 0) {
                lapisTotal += outerLayer;
            } else {
                marbleTotal += outerLayer;
            }
            stoneTotal += stone;
        }

        base -= 2;
    }

    let height = Math.floor(steps * increment);

    console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
    console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`);
    console.log(`Gold required: ${Math.ceil(goldTotal)}`);
    console.log(`Final pyramid height: ${height}`);
}

// Test cases
//pyramid(11, 1);
// pyramid(11, 0.75);
pyramid(12, 1);
// pyramid(23, 0.5);

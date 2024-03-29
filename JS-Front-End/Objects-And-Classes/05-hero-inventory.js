function solve(input) {
    const heroes = [];
    for (const row of input) {
        const [name, level, items] = row.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items,
        };

        heroes.push(hero)
    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(({name, level, items}) => {
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    });
}

function fancySolve(input) {
    input
        .map(row => row.split(' / '))
        .map(([name, level, items]) => ({
                name,
                level: Number(level),
                items,
        }))
        .sort((a, b) => a.level - b.level)
        .forEach(({name, level, items}) => {
            console.log(`Hero: ${name}`);
            console.log(`level => ${level}`);
            console.log(`items => ${items}`);
        })
}

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)

//input 1
//[
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'
// ]
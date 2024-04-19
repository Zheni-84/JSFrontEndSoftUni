function solve(input) {

    const heroesCount = Number(input.shift());
    const heroes = {};

    //Prepare heroes
    for (let i = 0; i < heroesCount; i++) {
        const [name, healthPoints, bullets] = input[i].split(' ');
        heroes[name] = {healthPoints: Number(healthPoints), bullets: Number(bullets),};
    }

    let line = input.shift();

    while (line !== 'Ride Off Into Sunset') {
        const [command, name, firstArg, secondArg] = line.split(' - ')
        const barista = heroes[name];
        let target, damage, amount, attacker;
        switch (command) {
            case 'FireShot':
                target = firstArg;
                fireShot(name, target);
                break;
            case 'TakeHit':
                damage = Number(firstArg);
                attacker = secondArg;
                takeHit(name, damage, attacker);
                break;
            case 'Reload':
                reload(name);
                break;
            case 'PatchUp':
                amount = Number(firstArg);
                patchUp(name, amount);
                break;
        }
        line = input.shift();
    }

    // Print all members of the party who are still alive
    for (const [name, {healthPoints, bullets}] of Object.entries(heroes)) {
        if (healthPoints > 0) {
            console.log(`${name}\n  HP: ${healthPoints}\n  Bullets: ${bullets}`);
        }
    }

    function fireShot(name, target) {
        const hero = heroes[name];
        if (hero.bullets > 0) {
            hero.bullets -= 1;
            console.log(`${name} has successfully hit ${target} and now has ${hero.bullets} bullets!`)
        } else {
            console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
        }
    }

    function takeHit(name, damage, attacker) {
        const hero = heroes[name];
        hero.healthPoints -= damage;
        if (hero.healthPoints > 0) {
            console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${hero.healthPoints} HP!`)
        } else {
            console.log(`${name} was gunned down by ${attacker}!`)
        }
    }

    function reload(name) {
        const hero = heroes[name];
        if (hero.bullets < 6) {
            const reloaded = 6 - hero.bullets;
            hero.bullets = 6;
            console.log(`${name} reloaded ${reloaded} bullets!`)
        } else {
            console.log(`${name}'s pistol is fully loaded!`)
        }
    }


    function patchUp(name, amount) {
        const hero = heroes[name];
        if (hero.healthPoints === 100) {
            console.log(`${name} is in full health!`);
        } else {
            const recovered = Math.min(100 - hero.healthPoints, amount);
            hero.healthPoints += recovered;
            console.log(`${name} patched up and recovered ${recovered} HP!`);
        }
    }
}

const input1 = ["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"];

const input2 = ["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"];

const input3 = ["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"];

solve(input3);

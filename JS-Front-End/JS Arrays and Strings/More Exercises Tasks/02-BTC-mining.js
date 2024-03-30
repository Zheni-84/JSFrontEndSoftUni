function calculateBitcoins(array) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;
    let money = 0;

    for (let i = 0; i < array.length; i++) {
        let goldMined = array[i];
        if ((i + 1) % 3 === 0) {
            goldMined -= goldMined * 0.3;
        }
        money += goldMined * goldPricePerGram;

        if (money >= bitcoinPrice) {
            let bitcoinsToBuy = Math.floor(money / bitcoinPrice);
            bitcoinsBought += bitcoinsToBuy;
            dayOfFirstBitcoin = dayOfFirstBitcoin || (i + 1);
            money -= bitcoinsToBuy * bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (dayOfFirstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

// Test cases
calculateBitcoins([100, 200, 300]);
calculateBitcoins([50, 100]);
calculateBitcoins([3124.15, 504.212, 2511.124]);

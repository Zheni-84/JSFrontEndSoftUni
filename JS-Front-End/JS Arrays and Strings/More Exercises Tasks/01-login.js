function login(input) {
    const username = input.shift();
    const correctPassword = username.split('').reverse().join('');
    let attempts = 0;

    input.some(password => {
        attempts++;
        if (password !== correctPassword) {
            if (attempts < 4) {
                console.log("Incorrect password. Try again.");
                return false; // Continue iteration
            }
            console.log(`User ${username} blocked!`);
            return true; // Stop iteration
        } else {
            console.log(`User ${username} logged in.`);
            return true; // Stop iteration
        }
    });
}

// Test cases
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

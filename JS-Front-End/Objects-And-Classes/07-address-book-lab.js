function solve(input) {
    const addressbook = input.reduce((book, line) => {
        const [name, address] = line.split(':');
        book[name] = address;
        return book;
    }, {});
    Object.entries(addressbook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place']); 
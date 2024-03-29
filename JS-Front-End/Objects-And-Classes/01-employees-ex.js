function solve(employeeNames) {
    const map = employeeNames
        .map(name => ({name, personalNumber: name.length}))
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Billarreal'
]);
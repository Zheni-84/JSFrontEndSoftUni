function solve2() {
    // Get the input values
    const textInput = document.getElementById('text');
    const conventionInput = document.getElementById('naming-convention');
    const resultSpan = document.getElementById('result');

    // Extract the text and naming convention values
    const text = textInput.value.trim();
    const convention = conventionInput.value.trim();

    // Check if the text is empty
    if (text === '') {
        resultSpan.textContent = 'Please enter some text';
        return;
    }

    // Split the text into words
    const words = text.split(' ');

    // Transform the words based on the naming convention
    let transformedText = '';
    if (convention.toLowerCase() === 'Camel Case') {
        transformedText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    } else if (convention.toLowerCase() === 'Pascal Case') {
        transformedText = words.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    } else {
        resultSpan.textContent = 'Invalid naming convention';
        return;
    }

    // Update the result span with the transformed text
    resultSpan.textContent = transformedText;
}

function solve() {
    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;

    const resultSpan = document.getElementById('result');

    if (namingConvention === 'Camel Case') {
        resultSpan.textContent = convertToCamelCase(text);
    } else if (namingConvention === 'Pascal Case') {
        resultSpan.textContent = convertToPascalCase(text);
    } else {
        resultSpan.textContent = 'Error!';
    }
}

function convertToCamelCase(text) {
    return text.split(' ').map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

function convertToPascalCase(text) {
    return text.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}


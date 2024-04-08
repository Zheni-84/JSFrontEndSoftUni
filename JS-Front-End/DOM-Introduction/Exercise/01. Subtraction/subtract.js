function subtract() {
    // Get the input elements
    const firstNumberInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');

    // Get the values from the input elements and convert them to numbers
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const difference = secondNumber - firstNumber;

    // Create a text node with the result
    //const resultText = document.createTextNode(`Result: ${difference.toFixed(2)}`);

    // Get the result div element
    const resultDiv = document.getElementById('result');

    // Clear any existing content in the result div
    //resultDiv.textContent = '';

    resultDiv.textContent = `Result: ${difference.toFixed(2)}`;

    // Append the result text node to the result div
    //resultDiv.appendChild(resultText);
}

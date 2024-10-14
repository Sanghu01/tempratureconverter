document.getElementById('convertBtn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultElement.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp;
    let outputUnit;

    // Perform conversion based on selected unit
    switch(unit) {
        case 'celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F | Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'fahrenheit':
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C | Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case 'kelvin':
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)}°C | Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            convertedTemp = 'Invalid unit selected.';
    }

    // Display the result
    resultElement.textContent = convertedTemp;
});

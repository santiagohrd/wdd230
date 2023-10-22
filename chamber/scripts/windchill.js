function calculateWindChill() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var windSpeed = parseFloat(document.getElementById('windSpeed').value);
    var windChillResultElement = document.getElementById('windChillResult');

    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        windChillResultElement.textContent = ' ' + windChill.toFixed(2) + ' °F';
    } else {
        windChillResultElement.textContent = 'N/A';
    }
}
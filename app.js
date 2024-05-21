async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '91c94c727cc48a588d67f49e411ec6f3'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('city-name').textContent = `Weather in ${cityName}`;
    document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
}

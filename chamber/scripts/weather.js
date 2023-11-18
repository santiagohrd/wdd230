const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

const forcast = document.querySelector('#forcast-temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.72&lon=-74.1&units=imperial&appid=de1bb7d255158b44de8c8b712ff9e354';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.72&lon=-74.1&appid=de1bb7d255158b44de8c8b712ff9e354';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
            displayForcast(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

apiFetch();


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;

    humidity.innerHTML = `  ${data.main.humidity}%`;
    wind.innerHTML = `  ${data.wind.speed.toFixed(1)}`;
}

function displayForcast(data){
    const dailyForecast = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'));
    for (let i = 0; i < 3; i++) {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');

        const icon = document.createElement('img');
        icon.setAttribute('src', `https://openweathermap.org/img/w/${dailyForecast[i].weather[0].icon}.png`);
        icon.setAttribute('alt', dailyForecast[i].weather[0].description);

        const temperature = document.createElement('span');
        temperature.innerHTML = `${dailyForecast[i].main.temp.toFixed(0)} &deg;F`;

        const desc = document.createElement('figcaption');
        desc.textContent = dailyForecast[i].weather[0].description.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

        forecastItem.appendChild(icon);
        forecastItem.appendChild(temperature);
        forecastItem.appendChild(desc);

        forcast.appendChild(forecastItem);
    }
}


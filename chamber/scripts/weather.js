const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

const forcast_day1 = document.querySelector('#forcast1');
const forcast_day2 = document.querySelector('#forcast2');
const forcast_day3 = document.querySelector('#forcast3');

const forcast_date1 = document.querySelector('#forcast-day1');
const forcast_date2 = document.querySelector('#forcast-day2');
const forcast_date3 = document.querySelector('#forcast-day3');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.72&lon=-74.1&units=imperial&appid=de1bb7d255158b44de8c8b712ff9e354';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.72&lon=-74.1&appid=de1bb7d255158b44de8c8b712ff9e354';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
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

//Forcast
async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function formatDate(date){
    return date.substring(6, 11).replace(/-/g, '/')
}

function displayForecast(data){
    let time = new Date(data.list[0].dt);

    forcast_day1.innerHTML = `${data.list[0].main.temp}&deg;F`;
    forcast_date1.innerHTML = `${formatDate(data.list[8].dt_txt)}`;

    forcast_day2.innerHTML = `${data.list[8].main.temp}&deg;F`;
    forcast_date2.innerHTML = `${formatDate(data.list[16].dt_txt)}`;

    forcast_day3.innerHTML = `${data.list[16].main.temp}&deg;F`;
    forcast_date3.innerHTML = `${formatDate(data.list[24].dt_txt)}`;
}

function capitalizeFirst(str){
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    return str2;
}

forecastFetch();
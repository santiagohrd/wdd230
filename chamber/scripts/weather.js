const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.72&lon=-74.1&units=imperial&appid=de1bb7d255158b44de8c8b712ff9e354';

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
    captionDesc.textContent = `  -  ${desc}`.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
}
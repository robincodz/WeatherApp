const input = document.querySelector('input');
const button = document.getElementById('btn');
const icon = document.querySelector('.icon');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const description= document.querySelector(".description")

button.addEventListener('click', () => {
    let city = input.value;
    getWeather(city);
});

function getWeather(city) {
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ff7dd7767e2f0a73418a503c61683687'}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            icon.innerHTML = `<img src=http://openweathermap.org/img/wn/${iconCode}.png alt ="weather icon"/>`;
            const weatherCity = data.name;
            const weatherCountry = data.sys.country;
            weather.innerHTML = `${weatherCity},${weatherCountry}`;

            let weatherTemp=data.main.temp;
            weatherTemp= weatherTemp - 273;
            const temp= weatherTemp.toFixed(2)
            temperature.innerHTML=`${temp}°C`;

            const weatherDescription= data.weather[0].description;
            description.innerHTML=`${weatherDescription}`;
           
        })
        
}





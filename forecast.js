
 
let apiKey = import.meta.env.VITE_API_KEY;

function fetchForecastData() {
    // Replace with your OpenWeatherMap API key
  
       // All your existing app.js code goes here


const city = document.querySelector('#cityInput').value;
console.log("city", city)
const url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

console.log(url2)

fetch(url2)
.then(response => response.json())
.then(data => {
   
    document.querySelector('#forecast-date').value = data.dt_txt

    console.log(url2);
})
}

export default {fetchForecastData};
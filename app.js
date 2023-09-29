import {weatherCode} from "./weatherCode";
    



   
         let revent = document.getElementById('cityInput');
    
        revent.addEventListener('keyup', function(event) {
       
         if (event.key === 'Enter') {
           console.log('new you');
           event.preventDefault();
           fetchWeatherData();
         }
        });   
        // Prevent the form from doing a full page submit
        function fetchWeatherData() {
            const API_KEY = '10f6e28fb0c6f884b4937841c9f01638'; // Replace with your OpenWeatherMap API key
           
                // All your existing app.js code goes here
        

        const city = document.querySelector('#cityInput').value;
        console.log("city", city)
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#location').textContent = data.name;
            document.querySelector('#weather-description').textContent = data.weather[0].description;
            console.log(data);

            // Fetching icon code from openweather and applying custom image style
            let dataResult = data.weather[0].id;
            console.log(dataResult);
            let weatherResult = weatherCode(dataResult);
            console.log(weatherResult);

            // Setting the icon class
            const iconElement = document.getElementById('weatherIcon');
            iconElement.className = 'wi ' + weatherResult;
            // iconElement.classList.remove('hidden');
            console.log(iconElement);
              
            // Getting the main temperature

           let weatherDegree = document.querySelector('#weather-degree');

            let tempCelsius = data.main.temp
            
            let roundedCelsius = Math.round(tempCelsius)
           
            weatherDegree.innerHTML = `${roundedCelsius} <span class="degree-symbol"> \u00B0C </span>`;   
            

            // Getting Windspeed
            let windspeed = document.getElementById('wind-speed')
            windspeed.textContent = data.wind.speed + " Km/h"
            
            // Getting Humdity
            let humidity = document.getElementById('humidity');

           humidity.textContent = data.main.humidity + " %"
          // Pressure
          let pressure = document.getElementById('pressure');

          pressure.textContent = data.main.pressure + " hpa"
            // Visibility
          let visibility = document.getElementById('visibility');
          let numbers = data.visibility;
          let stringNumbers = numbers.toLocaleString();

          visibility.textContent = stringNumbers + " Km"
        })
            
         
        .catch(error => {
            console.error("Error fetching the weather data:", error);
        });
};



window.fetchWeatherData = fetchWeatherData;



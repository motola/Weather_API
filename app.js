import { weatherCode } from "./weatherCode";
import { carAI } from "./carAI";
import { personAI } from "./personAI";
import { bikeAI } from "./bike";
import { vehicleAI } from "./vehicleAI";

let apiKey = import.meta.env.VITE_API_KEY;
let revent = document.getElementById("cityInput");
let city = "";


// Event listener from search to kickstart functions
revent.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Prevent the form from doing a full page submit
    event.preventDefault();

    city = revent.value;
    console.log(fetchWeatherData.API_KEY);
    fetchWeatherData();
    fetchFiveDayForecast();
  }
});


  // Function Declaration for the city forecast for the day
function fetchWeatherData() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   // using fetch api, get data from the external
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#location").textContent = data.name;
      document.querySelector("#weather-description").textContent =
        data.weather[0].description;
      console.log(data);

      // Fetching icon code from openweather and applying custom image style
      let dataResult = data.weather[0].id;
      console.log(dataResult);
      let weatherResult = weatherCode(dataResult);
      console.log(weatherResult);

      // Setting the icon class
      const iconElement = document.getElementById("weatherIcon");
      iconElement.className = "wi " + weatherResult;
      // iconElement.classList.remove('hidden');
      console.log(iconElement);

      // Getting the main temperature

      let weatherDegree = document.querySelector("#weather-degree");

      let tempCelsius = data.main.temp;

      let roundedCelsius = Math.round(tempCelsius);

      weatherDegree.innerHTML = `${roundedCelsius} <span class="degree-symbol"> \u00B0C </span>`;

      // Getting Windspeed data from open weather
      let windspeed1 = document.getElementById("wind-speed");
      let windSpeed = data.wind.speed;
      windspeed1.textContent = windSpeed + " Km/h";

      // Getting Humdity data from open weather
      let humidity = document.getElementById("humidity");
      let humidityData = "73";
      humidity.textContent = humidityData + " %";
      // Pressure data from open weather
      let pressure = document.getElementById("pressure");
      let pressureData = data.main.pressure;
      pressure.textContent = pressureData + " hpa";
      // Visibility data from open weather
      let visibility = document.getElementById("visibility");
      let numbers = data.visibility / 1000;
      let stringNumbers = numbers.toLocaleString();

      visibility.textContent = stringNumbers + " Km";

      // Get all elements assigned to stat-child from the DOM
      const parentContainer = document.getElementsByClassName("stat-child");

      // const imageElement = parentContainer.querySelector("img");
      // console.log(imageElement);
      // parentContainer[0].addEventListener('mouseover', function () {
      // console.log("mouse over done");

      // Put it in an array
      let allContainer = Array.from(parentContainer);

      // Iterate over elements in the array, add a new class that creates on hover and then add the AI Safety rules for each car
      allContainer.forEach(element => {
        element.dataset.originalContent = element.innerHTML;
        element.addEventListener("mouseover", function () {
          console.log("On mouseover");
          element.classList.add("custom");
          let header = element.querySelector("h5");
          console.log('h5 is ', header);

          // create variable to pass analytics result from AI safety utilty functions
          let aiResult;

          // Alogrithm to populate safety rules after each hover on header items
          if (header.textContent === "Cars") {
            console.log('cars text content is', header.textContent);
            aiResult = carAI(windSpeed, humidityData, numbers, pressureData);
            console.log(aiResult);
          } else if (header.textContent === "Individuals") {
            console.log('cars text content is', header.textContent);
            aiResult = personAI(windSpeed, humidityData, pressureData, numbers);
            console.log(aiResult);
          } else if (header.textContent === "Motor Bikes") {
            aiResult = bikeAI(windSpeed, humidityData, pressureData, numbers);
            console.log(aiResult);
          } else if (header.textContent === "Buses & Trailers") {
            aiResult = vehicleAI(
              windSpeed,
              humidityData,
              pressureData,
              numbers
            );
            console.log(aiResult);
          } else {
            aiResult = "Data not available at the moment, drive Safely";
          }

          console.log(element.innerHTML);
          // let dataAI = console.log(choose());
          // console.log(dataAI);

          document.querySelector(
            ".custom"
          ).innerHTML = `<h1> ${header.textContent} <p> (Sources: theAA.com, ChatGPT) </p>  </h1> <br/>
              <ul>
               ${aiResult.windAnalytics} 
               ${aiResult.humidityAnalytics}
               ${aiResult.visAnalytics}
               ${aiResult.pAnalytics} 
              <ul>`;
        });

        element.addEventListener("mouseout", function () {
          console.log("On mouse Out");
          element.classList.remove("custom");
          element.innerHTML = element.dataset.originalContent;
        });
      });

      // implement AI from logic from CarAI
    })

    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
}
// Ends here function for the day...


// Function for five days weather forecast.

function fetchFiveDayForecast() {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {

      let currentDate = new Date();
      let dayArray = [];
      console.log("data", data);
      
     // 1 Iterating over list of data obtained from openweather API
      data.list.forEach((item, index) => {
         
        // 2 Create and fetch all DOM elements needed to create the forecast with a global scope perspective
         let section = document.querySelector(".my-5");
         let column = section.querySelector(".col-md-12");
         let daySection = document.querySelector(".sub-section");
         let otherDays = daySection.querySelectorAll(`.head-date`);
         let allDay = document.querySelector(".all-day");
 
         // 3 Creating dom element and classes for the five-day weather forecast 
         const firstDiv = document.createElement("div");
         firstDiv.classList.add("col-md-3", "week");
         const timecastItem = document.createElement("div");
         const forecastItem = document.createElement("div");
         timecastItem.classList.add("timecast");
         forecastItem.classList.add("forecast");
       
        // 4 formating date data from the fetch API for the header
        const date = new Date(item.dt * 1000);

        if (date.toDateString() !== currentDate.toDateString())  {
          console.log("date: ", date, "currentDATE: ", currentDate);
          // Update the current date
          dayArray.push(date);
          console.log(dayArray);
         
          currentDate = date;    
          const timestamps = dayArray
          // Trying to loop through the date data in the array and sort date to each day, month and weekday
          const dates = timestamps.map(timestamp => {
          const sortDate = new Date(timestamp);
          let DayDate = sortDate.toLocaleDateString("en-US", {
            day: "numeric", 
          });
          let monthDate = sortDate.toLocaleDateString("en-US", {
            month: "short"
          });
          let weekDate = sortDate.toLocaleDateString("en-US", {
            weekday: "short",
          });
          let actualDate = `${DayDate} ${monthDate} ${weekDate}`
          return actualDate;
          });
          console.log(dates);
          //
          
         
         // assigning dates to each date element headers
        dates.forEach((date, index) => {
         if (index < otherDays.length) {
        otherDays[index].textContent = date;       
        } else {
          console.log(`No element found at index ${index}`);
        }
        });  
      } 
      //

      
        let formatDate = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        const dayOfWeek = date.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const newDate = `${formatDate}, ${dayOfWeek}`;


         // 3 Fetch date and time format from the api data for 3 hours interval for all five days
         const dateString = new Date(date);
         const timeFormat = new Intl.DateTimeFormat("en-US", {
           hour: "2-digit",
           minute: "2-digit",
         });
         const timeString = timeFormat.format(dateString);
         
         // 4 Fetch weatherCode needed for designing the weather icons
         let dataResult = item.weather[0].id;
         console.log(dataResult);
         let weatherResult = weatherCode(dataResult);
         console.log("waether Result ", weatherResult);
         const temp = Math.round(item.main.temp);
         const description = item.weather[0].main;
         // currentDate.innerHTML = date

         let forecastData = {
            newDate,
            timeString,
            temp,
            weatherResult,
            description
         }  
         
         console.log('forecastData', forecastData);
         
             allDay.addEventListener('click', function(event) {
          firstDiv.style.display = "none"
          handleButtonClick(event, allDay);
        });

        function handleButtonClick (event, buttonClick) {
          if (event.target === buttonClick) {
            firstDiv.style.display = "block"
            console.log("forecastData");
          }
        
        }
        
        // Getting the date data from the api and passing it to each header of the five days forecast 
       
      //
         otherDays.forEach(day => {
          day.addEventListener('click', function() {
           let headerDate = day.textContent;
           let dataDate = new Date(date)
           let selectedArray = []

           
           firstDiv.style.display = "none"

           let DayDate = dataDate.toLocaleDateString("en-US", {
            day: "numeric", 
          });
          let monthDate = dataDate.toLocaleDateString("en-US", {
            month: "short"
          });
          let weekDate = dataDate.toLocaleDateString("en-US", {
            weekday: "short",
          });
          let formattedDataDate = `${DayDate} ${monthDate} ${weekDate}`
         
          
          console.log('clicked', day.textContent, 'date: ', formattedDataDate)
           
          if (headerDate === formattedDataDate) {
            
            timecastItem.innerHTML = `
            <p id = "current-date">${forecastData.newDate}</p>
            <p id = "current-time">${forecastData.timeString}</p>           
              `;

            forecastItem.innerHTML = `
            <p id="weather-degree">${forecastData.temp}  \u00B0C  </p>
            <i id="weatherIcon" class="wi ${forecastData.weatherResult}">  </i>
            <p id="weather-description"> ${forecastData.description} </p>
            `;
            firstDiv.style.display = "block"
          }
          });
        })

       
        
        

    


        

       
       

    


 

  

      timecastItem.innerHTML = `
                  <p id = "current-date">${forecastData.newDate}</p>
                  <p id = "current-time">${forecastData.timeString}</p>           
     `;

        forecastItem.innerHTML = `
              <p id="weather-degree">${forecastData.temp}  \u00B0C  </p>
              <i id="weatherIcon" class="wi ${forecastData.weatherResult}">  </i>
              <p id="weather-description"> ${forecastData.description} </p>
              `;
        firstDiv.appendChild(timecastItem);
        firstDiv.appendChild(forecastItem);
        column.appendChild(firstDiv);
        console.log(column);
        let levent = document.getElementById("cityInput");
        levent.addEventListener("keyup", function (event) {
          if (event.key == "Enter") {
            
            // Prevent the form from doing a full page submit
            firstDiv.innerHTML = ''
            timecastItem.innerHTML = '';
            forecastItem.innerHTML = '';
            column.innerHTML = '';
            
          }
        
        });
       
      });
    })
    .catch((error) => {
      console.error("Error fetching 5-day forecast data:", error);
    });
}

window.fetchWeatherData = fetchWeatherData;



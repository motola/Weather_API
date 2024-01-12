// // apikey.js
// import dotenv from 'dotenv';

// dotenv.config();

// const apiKey = process.env.API_KEY;

// export default apiKey;



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
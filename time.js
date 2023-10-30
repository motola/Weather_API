export function displayCurrentTime() {

    // Date Function Declaration
    const now = new Date();

    // Time declaration
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

      // Determine AM or PM
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert hours from 24-hour format to 12-hour format
      hours = hours % 12;
      // Convert hour '0' to '12'
      hours = hours ? hours : 12;
      
      const timeString = `${hours}:${minutes}  ${period}`;
  
     let currentTime = document.getElementById('current-time');
  
      if (currentTime) {
      console.log(currentTime);
      currentTime.textContent = timeString;
      }


    // Today's Date Function Declaration
    const dayNumber = now.getDate();
    
    // Arrays to hold the names of months and days
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const monthName = monthNames[now.getMonth()];
    const dayName = dayNames[now.getDay()];

    const formattedDate = `${dayNumber} ${monthName} <br/> ${dayName}`;

    // Update the DOM element with the current date
   let currentDate =  document.getElementById('current-date')
     if (currentDate) {
        currentDate.innerHTML = formattedDate;
     }
  
     
}

// Display the current time immediately when the script runs
 // Set Current time

    displayCurrentTime();
    setInterval(displayCurrentTime, 5000);  
// Update the time every second (1000 milliseconds)

window.displayCurrentTime = displayCurrentTime;

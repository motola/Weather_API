export function vehicleAI(windspeed,humiditydata,visibilitydata,pressuredata) {
             
    let windAnalytics;

    // Safety Rules alogrithm for Windspeed

    if (windspeed === ' ') {
        windAnalytics = '<li> Unable to get data now, drive safely </li>'
    }
    else if (windspeed <= '29') {
        windAnalytics = `<li> Minimal risk, Always adhere to traffic rules, signals, and right-of-way rules <li>`;
    } else if (windspeed <= '45') {
        windAnalytics = `<li> Maintain a firm grip on the steering wheel to ensure control over your vehicle.</li>`;
    } else if (windspeed > '45') {
        windAnalytics = `<li>Gusty winds can significantly impact your stability and control. Ensure that any cargo in your trailer is securely fastened</li>`;
    } else {
        windAnalytics = '<li> Unable to get data now, Drive Safely </li>'; // Default icon for unhandled codes
    }
    

     // Safety Rules alogrithm for Humidity
     let humidityAnalytics;
    if (humiditydata < '30') {
        humidityAnalytics = `Use windshield wipers and headlights as needed to maintain clear vision arising from dust`;
    } else if (humiditydata <= '60') {
        humidityAnalytics = `<li> Humidity conditions can change quickly, so monitor weather forecasts for any sudden shifts </li>`;
    } else if (humiditydata > '60') {
        humidityAnalytics = `Maintain a safe following distance, Exercise caution and reduce speed in wet or humid conditions to maintain traction`
    }


    /// Safety Rules alogrithm for Visbility

    let visAnalytics;

    if (visibilitydata < '1') {
        visAnalytics  = `<li> slow down to a safe speed that allows for appropriate reaction time and stopping distance</li>`
    } else if (visibilitydata < '5') {
        visAnalytics  = ` <li> Follow General Safety Rules </li>`
    } else if (visibilitydata >= '5') {
        visAnalytics  = `<li> Regularly check your side mirrors to monitor the presence of other vehicles and potential blind spots</li>`
    } else {
        visAnalytics  = '<li> Unable to get data now, Drive Safely </li>'
    }

     // Code for Pressure
   
    let pAnalytics;
    if (pressuredata < '1000') {
        pAnalytics  = `<li> Ensure that any cargo on your trailer is securely fastened to prevent shifting or imbalance</li>`
    } else if (pressuredata >= '1013.25') {
        pAnalytics  = ` <li> Maintain Safe Following Distance </li>`
    } else {
       pAnalytics  = '<li>Ensure that any cargo on your trailer is securely fastened to prevent shifting or imbalance </li>'
    }

   


    return {windAnalytics, humidityAnalytics, visAnalytics, pAnalytics};


   

   

    }
    
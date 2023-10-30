export function personAI(windspeed,humiditydata,visibilitydata,pressuredata) {
             
    let windAnalytics;

    // Safety Rules alogrithm for Windspeed

    if (windspeed === ' ') {
        windAnalytics = '<li> Unable to get data now, drive safely </li>'
    }
    else if (windspeed <= '29') {
        windAnalytics = `<li> Windspeed is minimal. Secure loose items and be more aware of your environment <li>`;
    } else if (windspeed <= '45') {
        windAnalytics = `<li> High wind.Be careful of Powerlines and power outages, watch out for falling trees and branches </li>`;
    } else if (windspeed > '45') {
        windAnalytics = `<li>Potential Dangerous wind,Avoid outdoor activities, careful of powerlines and outages,stay abreast of community alerts and find evacuation routes</li>`;
    } else {
        windAnalytics = '<li> Unable to get data now, Walk Safely </li>'; // Default icon for unhandled codes
    }
    

     // Safety Rules alogrithm for Humidity
     let humidityAnalytics;
    if (humiditydata < '30') {
        humidityAnalytics = `Low Humidity - Stay Hydrated, Moisturize your skin and wear light clothing`;
    } else if (humiditydata <= '60') {
        humidityAnalytics = `<li> Humidity seems moderate. Use crosswalks, stay cautious and wear comfortable clothing </li>`;
    } else if (humiditydata > '60') {
        humidityAnalytics = `High Humidity, stay hydrated, be mindful of changing weather and pay attention to local alerts`
    }


    /// Safety Rules alogrithm for Visbility

    let visAnalytics;

    if (visibilitydata < '1') {
        visAnalytics  = `<li> Might experience Fog, Rain, or Poor Lighting - Be cautious at intersection and use cross walks </li>`
    } else if (visibilitydata < '5') {
        visAnalytics  = ` <li> Obey traffic rules and stay on sidewalks </li>`
    } else if (visibilitydata >= '5') {
        visAnalytics  = `<li> Clear Visibility, observe all traffic rules </li>`
    } else {
        visAnalytics  = '<li> Unable to get data now, Walk Safely </li>'
    }

     // Code for Pressure
   
    let pAnalytics;
    if (pressuredata < '1000') {
        pAnalytics  = `<li> Stormy Weather - walk on the side facing oncoming traffic so you can see approaching vehicles</li>`
    } else if (pressuredata >= '1013.25') {
        pAnalytics  = ` <li> Clear weather condition, remain vigilant and have a charged mobile phone</li>`
    } else {
       pAnalytics  = '<li> No pressure on data, Walk responsibly </li>'
    }

   


    return {windAnalytics, humidityAnalytics, visAnalytics, pAnalytics};


   

   

    }
    
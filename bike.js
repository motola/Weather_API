export function bikeAI(windspeed,humiditydata,visibilitydata,pressuredata) {
             
    let windAnalytics;

    // Safety Rules alogrithm for Windspeed

    if (windspeed === ' ') {
        windAnalytics = '<li> Unable to get data now, drive safely </li>'
    }
    else if (windspeed <= '29') {
        windAnalytics = `<li> Apply sunscreen and wear sunglasses to protect yourself from the sun's UV rays <li>`;
    } else if (windspeed <= '45') {
        windAnalytics = `<li> In moderate wind conditions, stay aware of your bike's stability and maintain control. Be prepared for sudden gusts of wind</li>`;
    } else if (windspeed > '45') {
        windAnalytics = `<li>PLower your cycling speed in strong winds to maintain better control over your bike.</li>`;
    } else {
        windAnalytics = '<li> Unable to get data now, Bike Safely </li>'; // Default icon for unhandled codes
    }
    

     // Safety Rules alogrithm for Humidity
     let humidityAnalytics;
    if (humiditydata < '30') {
        humidityAnalytics = `Low humidity can cause tires to lose pressure. Regularly check and maintain proper tire pressure for safety and performance`;
    } else if (humiditydata <= '60') {
        humidityAnalytics = `<li> Observe traffic rules, use hand signals for turns, and maintain safe distances from vehicles </li>`;
    } else if (humiditydata > '60') {
        humidityAnalytics = `Choose moisture-wicking and breathable clothing to help regulate your body temperature and keep you comfortable`
    }


    /// Safety Rules alogrithm for Visbility

    let visAnalytics;

    if (visibilitydata < '1') {
        visAnalytics  = `<li> Put on reflective clothing and accessories, including a reflective vest or ankle bands, to make yourself visible to drivers in low-light or foggy conditions</li>`
    } else if (visibilitydata < '5') {
        visAnalytics  = ` <li> Stay in designated bike lanes and paths when available. These provide a safe separation from vehicular traffic. </li>`
    } else if (visibilitydata >= '5') {
        visAnalytics  = `<li> Clear Visibility, Follow Right-of-Way Rules and respect pesdestrians </li>`
    } else {
        visAnalytics  = '<li> Unable to get data now, Drive Safely </li>'
    }
   
    let pAnalytics;
    if (pressuredata < '1000') {
        pAnalytics  = `<li> Low Pressure - Check bike's equipment such as brakes, tires, light and reflectors before going on a journey</li>`
    } else if (pressuredata >= '1013.25') {
        pAnalytics  = ` <li>  Use designated bike lanes and paths, Wear brightly colored or reflective clothing </li>`
    } else {
       pAnalytics  = '<li> No pressure on data, drive responsibly </li>'
    }

   


    return {windAnalytics, humidityAnalytics, visAnalytics, pAnalytics};


    // Code for Pressure

   

    }
    
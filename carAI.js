export function carAI(windspeed,humiditydata,visibilitydata,pressuredata) {
             
            let windAnalytics;

            // Safety Rules alogrithm for Windspeed

            if (windspeed === ' ') {
                windAnalytics = '<li> Unable to get data now, drive safely </li>'
            }
            else if (windspeed <= '29') {
                windAnalytics = `<li> Wind speed is normal and very safe for cars to drive <li>`;
            } else if (windspeed <= '45') {
                windAnalytics = `<li> High wind. Park Safely, avoid overtaking and keep distance from other vehicles</li>`;
            } else if (windspeed > '45') {
                windAnalytics = `<li>Potential Dangerous wind, recommend avoid driving if you can</li>`;
            } else {
                windAnalytics = '<li> Unable to get data now, Drive Safely </li>'; // Default icon for unhandled codes
            }
            

             // Safety Rules alogrithm for Humidity
             let humidityAnalytics;
            if (humiditydata < '30') {
                humidityAnalytics = `Low Humidity - Look out for your tire pressure, car battery and maintain proper vehicle maintenace`;
            } else if (humiditydata <= '60') {
                humidityAnalytics = `<li> Humidity seems moderate. Travel safely with no worries </li>`;
            } else if (humiditydata > '60') {
                humidityAnalytics = `High Humidity, look out for reduced visibility, battery life, Fog formation on the road and Tire Traction when driving`
            }


            /// Safety Rules alogrithm for Visbility

            let visAnalytics;

            if (visibilitydata < '1') {
                visAnalytics  = `<li> Low visibility - Stay in your lane, reduce driving speed, use headlight and space out from other vehicles</li>`
            } else if (visibilitydata < '5') {
                visAnalytics  = ` <li> Moderate visibility - maintain moderate visibility, observe speed limits and stay cautious at intersections </li>`
            } else if (visibilitydata >= '5') {
                visAnalytics  = `<li> Clear Visibility </li>`
            } else {
                visAnalytics  = '<li> Unable to get data now, Drive Safely </li>'
            }
           
            let pAnalytics;
            if (pressuredata < '1000') {
                pAnalytics  = `<li> Low Pressure - Look out for storms, heavy rainfall and strong winds</li>`
            } else if (pressuredata >= '1013.25') {
                pAnalytics  = ` <li> Normal atmosphere pressure indicating fair weather, observe all traffic laws as usual </li>`
            } else {
               pAnalytics  = '<li> No pressure on data, drive responsibly </li>'
            }

           


            return {windAnalytics, humidityAnalytics, visAnalytics, pAnalytics};


            // Code for Pressure

           
        
            }
            
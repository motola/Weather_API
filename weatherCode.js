export function weatherCode (weatherCode) {
             
            let iconClass;
  
            if (weatherCode >= 200 && weatherCode < 300) {
                iconClass = 'wi-thunderstorm';
            } else if (weatherCode >= 300 && weatherCode < 500) {
                iconClass = 'wi-showers';
            } else if (weatherCode >= 500 && weatherCode < 600) {
                iconClass = 'wi-rain';
            } else if (weatherCode >= 600 && weatherCode < 700) {
                iconClass = 'wi-snow';
            } else if (weatherCode >= 700 && weatherCode < 800) {
                iconClass = 'wi-fog';
            } else if (weatherCode === 800) {
                iconClass = 'wi-day-sunny';
            } else if (weatherCode > 800 && weatherCode < 900) {
                iconClass = 'wi-cloudy';
            } else {
                iconClass = 'wi-na'; // Default icon for unhandled codes
            }

            return iconClass;
        }
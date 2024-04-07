const mockWeatherData = {
  temperature: 20,
  feelsLike: 18,
  humidity: 60,
  condition: "Sunny",
  icon: "01d",
  windSpeed: 10,
  sunrise: 1619992200,
  sunset: 1619996400,
  timezone: "Europe/Berlin"
};

// Function to fetch current weather based on user's location
export const getCurrentWeather = async (searchQuery) => {
  // Simulate fetching data from API (replace with actual API call)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockWeatherData);
    }, 1000); // Simulating 1 second delay
  });
};

// Function to format local time
export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  // Mock implementation, replace with actual implementation if needed
  return new Date(secs * 1000).toLocaleString("en-US", {
    timeZone: zone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
};

// Function to get weather icon URL
export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

// Function to get weather icon based on condition
export const getWeatherIcon = (icon) => iconUrlFromCode(icon);

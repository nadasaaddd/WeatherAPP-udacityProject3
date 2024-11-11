//API credentials
const apiKey = "e6bc43bede71ec9ad0912ca76478b436";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

// Function to GET weather data from OpenWeatherMap API
const getWeatherData = async (zip) => {
  const response = await fetch(`${baseURL}${zip}&appid=${apiKey}&units=metric`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Function to POST data
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //convert data to JSON string
  });

  try {
    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
// Function to update the UI with stored data
const updateUI = async () => {
  const response = await fetch("/data");
  try {
    const data = await response.json();

    //update- HTML elements
    document.getElementById("date").innerText = `Date: ${data.date}`;
    document.getElementById(
      "temp"
    ).innerText = `Temperature: ${data.temperature}°C`;
    document.getElementById(
      "content"
    ).innerText = `Feeling: ${data.userResponse}`;
    
    // Make entryHolder visible
    document.getElementById("entryHolder").style.display = "block";

  } catch (error) {
    console.error("Error updating UI:", error);
  }
};
// Event listener for 'generate' button
document.getElementById("generate").addEventListener("click", async () => {
  const zip = document.getElementById("zip").value;
  const userResponse = document.getElementById("feelings").value;

  const weatherData = await getWeatherData(zip);
  if (weatherData && weatherData.main) {
    const data = {
      temperature: weatherData.main.temp,
      date: new Date().toLocaleDateString(),
      userResponse,
    };

    await postData("/addData", data);
    updateUI(); //update with new data
  } else {
    console.error("Weather data not available for the entered ZIP code");
  }
});

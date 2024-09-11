function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let currentTemp = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  console.log(response.data);
  formatDateValue(date);
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  timeElement.innerHTML = formatDateValue(date);
  let description = response.data.condition.description;
  descriptionElement.innerHTML = description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(currentTemp);
}
function formatDateValue(date) {}
function searchCity(city) {
  key = "f7b738a0b07436t36c3d2483d34ob9da";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(displayWeather);
}
function formatDateValue(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}
function handleClick(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleClick);
searchCity("Paris");

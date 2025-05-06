const baseUrl ='https://api.openweathermap.org/data/2.5/weather?q=chengdu&appid=df8060fcc2d3b557ddd1c119f440a8a8&units=metric';

const input = document.querySelector('#input');
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector('#humidityAmount');
const wind = document.querySelector('#windSpeed');
const temp = document.querySelector('#temp');
const button = document.querySelector('.searchIcon');
const img = document.querySelector('#weatherImg');

button.addEventListener("click", async () => {
  let inputValue = input.value;
  cityName.innerText = inputValue;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=df8060fcc2d3b557ddd1c119f440a8a8&units=metric`;

  let response = await fetch(url);
  let data = await response.json();
  humidity.innerText = `${data.main.humidity}%`;
  wind.innerText = `${data.wind.speed} Km/h`;
  temp.innerText = `${data.main.temp}°C`;

  let imgChange = data.weather[0].main.toLowerCase();

  if (imgChange === 'clear') {
    img.src = 'clear.png';
  } else if (imgChange === 'clouds') {
    img.src = "clouds.png";
  } else if (imgChange === 'drizzle') {
    img.src = 'drizzle.png';
  } else if (imgChange === 'mist') {
    img.src = 'mist.png';
  } else if (imgChange === 'rain') {
    img.src = 'rain.png';
  } else if (imgChange === 'snow') {
    img.src = 'snow.png';
  }

});





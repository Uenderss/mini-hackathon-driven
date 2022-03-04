let lat = 0;
let lon = 0;
let URL_SECOND_API = '';
let city = '';
let tempmax = '';
let tempmin = '';
let descriptionWeather = '';
let weatherIcon = '';

function localizaoAutomatica() {
    
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  
    lat = (position.coords.latitude).toFixed(2);
    lon = (position.coords.longitude).toFixed(2);
    console.log(lat);
    console.log(lon);
    URL_SECOND_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e82254cee731f87bb90ca60059ca134`
    searchByPosition();
}

function searchByPosition() {
    const promisse = axios.get(URL_SECOND_API);
    promisse.then(renderWeather);
    promisse.catch()
}

function renderWeather(data) {
  console.log(data);
  city = data.data.name;
  console.log(city);
  tempmax = ((data.data.main.temp_max)-273.15).toFixed(2);
  console.log(tempmax);
  tempmin = ((data.data.main.temp_min)-273.15).toFixed(2);
  console.log(tempmin);
  descriptionWeather = data.data.weather[0].description;
  console.log(descriptionWeather);
  weatherIcon = data.data.weather[0].icon;
  console.log(weatherIcon);

  const renderInfos = document.querySelector("#demo");
  renderInfos.innerHTML += `${city} ${tempmax} ${tempmin} ${descriptionWeather} ${weatherIcon}`
}
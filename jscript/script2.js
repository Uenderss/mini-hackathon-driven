let x = document.getElementById("demo");
let lat;
let lon;
const URL_SECOND_API = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={4e82254cee731f87bb90ca60059ca134}`

function localizaoAutomatica() {
    
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
}

function searchByPosition() {
    const promisse = axios.get(URL_SECOND_API);
    promisse.then(renderWeather);
    promisse.catch()
}
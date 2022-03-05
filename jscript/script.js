const API_key = `4e82254cee731f87bb90ca60059ca134`;
let locations = [];

function localizaoDirecionado() {
  const inputLocation = document.createElement("div");
  inputLocation.classList.add("ask-location");
  const inputLocationHTML = `
    <label for="location-input">Insira sua localização</label>
    <input id="location-input" type="text" placeholder="Cidade, Estado, País" />
    <button onclick="getInput()">Buscar</button>
  `
  inputLocation.innerHTML = inputLocationHTML

  const insertionPoint = document.querySelector(".tela1>h2")
  insertionPoint.insertAdjacentElement('afterend', inputLocation)
}

function getInput() {
  const locationInput = document.querySelector('#location-input').value

  getExactLocation(locationInput)
}

function getExactLocation(location) {
  const URL_SECOND_API = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_key}`

  const request = axios.get(URL_SECOND_API)

  request.then(get5Locations)
  request.catch((er) => {
    console.error("Error: ", er.status)
    console.error(er)
  })
}

function createLocationsListElement() {
  const input = document.querySelector("#location-input")

  const optionsUl = document.createElement("ul")
  optionsUl.classList.add("options-div")

  input.insertAdjacentElement('afterend', optionsUl)
}

function get5Locations(response) {
  locations = [...response.data]

  createLocationsListElement()

  const optionsUl = document.querySelector(".options-div")
  let currentOptions = ''

  locations.forEach((option) => {
    lat = option.lat
    lon = option.lon

    currentOptions += `
      <li>
        <p onclick="getLocation('${lat}', '${lon}')">Cidade: ${option.name}, UF: ${option.state}</p>
      </li>
    `
  })

  optionsUl.innerHTML = currentOptions
}

function getLocation(lat, lon) {
  const selectedLocation = locations.filter((location) => location.lat === lat * 1 && location.lon === lon * 1)

  selectedLocation ? showPointedPosition() : alert("Deu ruim!!!")
}

function showPointedPosition() {
  hideSearchElements()

  URL_SECOND_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
  searchByPosition();
}

function hideSearchElements() {
  const tela1 = document.querySelector(".tela1")
  const searchContainer = document.querySelector(".ask-location")

  tela1.removeChild(searchContainer)
}
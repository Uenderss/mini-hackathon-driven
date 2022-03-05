const API_key = `4e82254cee731f87bb90ca60059ca134`;
let locations = [];

/* 
  recebe input com o as infos
  faz um get na api 1
  guarda as 5 primeiras respostas
  mostra o nome das 5 primeiras opções para o usuário escolher

  de acordo com a opção escolhida, pegar lat e lon
  fazer request na segunda api e pegar os dados necessários
  retornar os dados para montar na tela
*/

function localizaoDirecionado() {
  const inputLocation = document.createElement("div");
  inputLocation.classList.add("ask-location");
  const inputLocationHTML = `
    <label for="location-input">Insira sua localização</label>
    <input id="location-input" type="text" />
    <button onclick="getInput()">Buscar</button>
  `
  inputLocation.innerHTML = inputLocationHTML

  const insertionPoint = document.querySelector(".tela1>h2")
  insertionPoint.insertAdjacentElement('afterend', inputLocation)

  inputLocation.addEventListener('change', getInput)
}

function getInput() {
  console.log("chamou get Input");
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
let barto={};
function get5Locations(response) {
  locations = [...response.data]
  barto=locations;
  const optionsUl = document.createElement("ul");
  optionsUl.classList.add("options-div");

  locations.forEach((option) => {
    const liOp = document.createElement("li")

    liOp.innerHTML = `
      <p onclick="getLocation('${option.name}')">${option.name}   ${option.state}</p>
    `

    optionsUl.appendChild(liOp)
  })

  const input = document.querySelector("#location-input")

  input.insertAdjacentElement('afterend', optionsUl)
}

function getLocation(locationName) {
  
  const selectedLocation = locations.filter((location) => location.name === locationName);

  console.log(selectedLocation)
}
const API_key = `4e82254cee731f87bb90ca60059ca134`
const URL_FIRST_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

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
  const inputLocation = document.createElement("div.askLocation")
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

function get5Locations(response) {
  const options = [...response.data]

  const optionsUl = document.createElement("ul.optionsDiv")

  options.forEach((option) => {
    const liOp = document.createElement("li")

    liOp.innerHTML = `
      <p onclick="">${option.name}</p>
    `

    optionsUl.appendChild(liOp)
  })

  const input = document.querySelector("#location-input")

  input.insertAdjacentElement('afterend', optionsUl)
}
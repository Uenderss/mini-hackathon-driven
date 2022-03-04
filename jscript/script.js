const API_key = `4e82254cee731f87bb90ca60059ca134`
const URL_FIRST_API = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

/* 
  recebe input com o as infos
  faz um get na api 1
  guarda as 5 primeiras respostas
  mostra o nome das 5 primeiras opções para o usuário escolher
  de acordo com a opção escolhida, pegar lat e lon
  fazer request na segunda api e pegar os dados necessários
  retornar os dados para montar na tela
*/

function getInput() {
  // Adicionar nome do input que recebe a localização
  const locationInput = document.querySelector('').innerHTML
  // const {cityName, stateCode, countryCode} = locationInput.split(",")

  getExactLocation(locationInput)
}

function getExactLocation(location) {
  const URL_SECOND_API = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_key}`


}
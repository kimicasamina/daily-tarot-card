const api = "https://tarot-api.onrender.com/api/v1/cards/random?n=1"

const cards = document.querySelector('.cards')
let html;
const getCards = async () => {
  const response = await fetch(api)
  // if (response != 200){
  //   throw new Error('Failed to fetch data')
  // }
  const data = await response.json()
  return data 
}

getCards().then(data => {
  console.log(data)
  data.cards.forEach( card => {
    displayCards(card)
  })
}).catch(err => {
  console.log(err)
})

function displayCards(randomCard){
    html += `
    <div class="card">
    <div class="card-name">${randomCard.name}</div>
    <p class="card-meaning-up">${randomCard.meaning_up}</p>
    <p class="card-meaning-rev">${randomCard.meaning_rev}</p>
  </div>
    `

    cards.innerHTML = html
  }

const api = "https://tarot-api.onrender.com/api/v1/cards/random?n=1"
const btn = document.querySelector('#get-card-btn')
const cards = document.querySelector('.cards')
let html;


btn.addEventListener('click', displayCards)
const getCards = async () => {
  const response = await fetch(api)
  if (response.ok){
    const data = await response.json()
    return data 
  } else {
    throw new Error('Failed to fetch data')
  }
}

function displayCards(){
  getCards().then(data => {
    data.cards.forEach(card => {
      html = `<div class="card">
                <h2 class="card-name">${card.name}</h2>
                <p class="card-meaning-up"><b>Meaning</b>: ${card.meaning_up}</p>
                <p class="card-meaning-rev"><b>Reverse</b>: ${card.meaning_rev}</p>
                </div>`

      cards.innerHTML = html
    })
  }).catch(err =>{
    console.log(err)
  })

  }

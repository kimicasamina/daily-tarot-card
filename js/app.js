const api = "https://tarot-api.onrender.com/api/v1/cards/random?n=5"

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
    console.log(card)
  })
}).catch(err => {
  console.log(err)
})
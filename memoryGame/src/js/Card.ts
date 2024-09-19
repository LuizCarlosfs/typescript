export interface Card {
    id: string;
    description: string;
    img: string;
}

const uniqueCards: Card[] = [
    {img: "01.png", description:"card1", id: "card1"},
    {img: "02.jpg", description:"card2", id: "card2"},
    {img: "03.jpg", description:"card3", id: "card3"},
    {img: "04.png", description:"card4", id: "card4"},
    {img: "05.png", description:"card5", id: "card5"},
    {img: "06.jpg", description:"card6", id: "card6"},
    {img: "07.jpg", description:"card7", id: "card7"},
    {img: "08.jpg", description:"card8", id: "card8"},
]

const cardsOriginais: Card[] = []

uniqueCards.forEach( (card) =>{
    cardsOriginais.push({...card })
    cardsOriginais.push({...card })
})

//  criar array cards em ordem aleatória

const cards: Card[] = []
let max = cardsOriginais.length - 1
const min = 0

while (cardsOriginais.length > 0) {
  const indice= Math.floor(Math.random() * (max - min +1)) + min
  const exclusao = cardsOriginais.splice(indice,1)

  cards.push({...exclusao[0]})
  max = cardsOriginais.length - 1
} 

export { cards }
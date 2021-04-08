const suits = ["clubs", "spades", "hearts", "diamonds"];
const numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];


const getDeck = () => {
  let deck = [];

  suits.forEach(suit => {
    numbers.forEach(number => {
      deck.push({ suit, number });
    });
  });

  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);

    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
}

module.exports = {
  getDeck,
  shuffleDeck
}

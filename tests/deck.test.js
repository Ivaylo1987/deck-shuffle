const { getDeck, shuffleDeck } = require("../src/deck-generator");

describe("deck of cards", () => {
  test("getDeck should return 52 cards", () => {
    const deck = getDeck();
    expect(deck.length).toBe(52);
  })

  test("deck contains ace of spades", () => {
    const deck = getDeck();
    expect(deck.some(card => card.suit === "spades" && card.number === "ace")).toBe(true);
  })

  test("shuffleDeck should return different frist element after shuffle", () => {
    const deck = getDeck();
    const firstElement = deck[0];
    shuffleDeck(deck);
    const firstElementAfterSuffle = deck[0];

    expect(firstElement).not.toMatchObject(firstElementAfterSuffle);
  })

  test("shuffleDeck should return different last elements after shuffle", () => {
    const deck = getDeck();
    const lastElement = deck[deck.length -1];
    shuffleDeck(deck);
    const lastElementAfterSuffle = deck[deck.length - 1];

    expect(lastElement).not.toMatchObject(lastElementAfterSuffle);
  })
})

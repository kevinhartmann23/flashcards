const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  let card1;
  let card2;
  let card3;
  let gameCards;
  let deck;
  let round1;
  let game;


  beforeEach('should create instances of cards and deck', () => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    gameCards = [card1, card2, card3]
    deck = new Deck(gameCards);
    round1 = new Round(deck);
    game = new Game();
  });

  it('should be a function', () => {

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', () => {

    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', () => {

    expect(game.currentRound).to.equal(undefined);
  });

  it('should create a cards, put cards into a deck, and create a new Round using deck', () => {
    game.start(gameCards);

    expect(game.currentRound.deck.cards).to.deep.equal(round1.deck.cards);
    expect(game.currentRound.deck).to.deep.equal(round1.deck);
    expect(game.currentRound).to.deep.equal(round1);
  });
})

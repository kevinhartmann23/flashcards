const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {

  beforeEach( () => {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
  });

  it.skip('should be a function', () => {
    const round1 = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round1 = new Round();
    expect(round1).to.be.an.instanceof(Round);
  });

  it.skip('should keep count of turns', () => {
    const round1 = new Round();
    expect(round1.turnCount).to.deep.equal(0);
  });

  it.skip('should store a Deck of cards', () => {
    const round1 = new Round(deck);

    expect(round1.deck).to.equal(deck);
  });

  it.skip('should return the current card being played', () => {
    const round1 = new Round(deck);

    expect(round1.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should store an array of incorrect guesses', () => {
    const round1 = new Round(deck);

    expect(round1.incorrectGuesses).to.equal([]);
  });

  it.skip('should allow user to take their turn with a guess as the argument', () => {
    const round1 = new Round(deck);

    expect(round1.takeTurn()).to.be.a('function');
  });

  it.skip('should create a new instance of Turn class', () => {
    const round1 = new Round(deck);

    expect(round1.takeTurn()).to.be.an.instanceof(Turn)
  });

  it.skip('should take the guess argument and evaluate guess', () => {
    const round1 = new Round(deck);

    expect(round1.takeTurn('array')).to.equal("incorrect!")
    expect(round1.takeTurn('object')).to.equal("correct!");
  });

  it.skip('should store any incorrect answers by unique id', () => {
    const round1 = new Round(deck);

    round1.takeTurn('array');
    expect(round1.incorrectGuesses).to.deep.equal([1]);
  });

  it.skip('should add to turn count', () => {
    const round1 = new Round(deck);

    round1.takeTurn();
    expect(round1.turnCount).to.equal(1);

    round1.takeTurn();
    expect(round1.turnCount).to.equal(2);

    round1.takeTurn();
    expect(round1.turnCount).to.equal(3);
  });

  it.skip('should change to the next card after turn', () => {
    const round1 = new Round(deck);

    round1.takeTurn('object');

    expect(round1.takeTurn('object')).to.equal("correct!");
    expect(round1.incorrectGuesses).to.deep.equal([]);
    expect(round1.turnCount).to.equal(1);
    expect(round1.returnCurrentCard()).to.equal(card2);
  });

  it.skip('should calculate the percent of correct answers', () => {
    const round1 = new Round(deck);

    round1.takeTurn('object');
    round1.takeTurn('object');
    round1.takeTuen('iteration method');

    expect(round1.calculatePercentCorrect()).to.equal(33)
  });

  it.skip('should end the round', () => {
    const round1 = new Round(deck);

    round1.takeTurn('object');
    round1.takeTurn('object');
    round1.takeTuen('iteration method');

    round1.calculatePercentCorrect();

    expect(round1.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!')
  });

})

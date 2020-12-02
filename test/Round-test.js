const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', () => {

  let card1;
  let card2;
  let card3;
  let deck;
  let round1;


  beforeEach('should create instances of cards and deck', () => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = new Deck([card1, card2, card3]);
    round1 = new Round(deck);
  });

  it('should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {

    expect(round1).to.be.an.instanceof(Round);
  });

  it('should keep count of turns', () => {

    expect(round1.turnCount).to.deep.equal(0);
  });

  it('should store a Deck of cards', () => {

    expect(round1.deck).to.equal(deck);
  });

  it('should return the current card being played', () => {

    expect(round1.returnCurrentCard()).to.equal(card1);
  });

  it('should store an array of incorrect guesses', () => {

    expect(round1.incorrectGuesses).to.deep.equal([]);
  });

  it('should allow user to take their turn', () => {

    expect(round1.takeTurn).to.be.a('function');
  });

  it('should create a new instance of Turn class', () => {

    expect(round1.takeTurn('object')).to.equal('correct!');
    let round2 = new Round(deck);
    expect(round2.takeTurn('array')).to.equal('incorrect!')
  });

  it('should store any incorrect answers by unique id', () => {

    round1.takeTurn('array');
    expect(round1.incorrectGuesses).to.deep.equal([1]);
  });

  it('should add to turn count', () => {

    round1.takeTurn();
    expect(round1.turnCount).to.equal(1);

    round1.takeTurn();
    expect(round1.turnCount).to.equal(2);

    round1.takeTurn();
    expect(round1.turnCount).to.equal(3);
  });

  it('should change to the next card after turn', () => {

    expect(round1.takeTurn('object')).to.equal("correct!");
    expect(round1.incorrectGuesses).to.deep.equal([]);
    expect(round1.turnCount).to.equal(1);
    expect(round1.returnCurrentCard()).to.equal(card2);
  });

  it('should calculate the percent of correct answers', () => {

    round1.takeTurn('object');
    round1.takeTurn('object');
    round1.takeTurn('iteration method');

    expect(round1.calculatePercentCorrect()).to.equal(33)
  });

  it('should end the round', () => {

    round1.takeTurn('object');
    round1.takeTurn('object');
    round1.takeTurn('iteration method');

    round1.calculatePercentCorrect();

    expect(round1.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!')
  });

})

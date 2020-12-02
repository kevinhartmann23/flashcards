const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  }

  returnCurrentCard(){
    return this.currentCard;
  }

  takeTurn(guess){
    let turn = new Turn(guess, this.currentCard);
    this.turnCount ++;
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(this.currentCard.id);
    }
    let nextCard = (this.deck.cards.indexOf(this.currentCard) + 1);
    this.currentCard = this.deck.cards[nextCard];
    return turn.giveFeedback();
  }

  calculatePercentCorrect(){
    return Math.floor((this.turnCount - this.incorrectGuesses.length) / this.turnCount * 100);
  }

  endRound(){
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;

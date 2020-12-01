class Turn {
  constructor(userGuess, currentCard){
    this.userGuess = userGuess;
    this.currentCard = currentCard;
    this.correctGuess;
  }

  returnGuess(){
    return this.userGuess;
  }

  returnCard(){
    return this.currentCard;
  }

  evaluateGuess(){
    if(this.userGuess === this.currentCard.correctAnswer){
      this.correctGuess = true;
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(){
    if(this.correctGuess === true){
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}

module.exports = Turn;

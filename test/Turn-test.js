const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.userGuess).to.equal('object');
  });

  it('should store a current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should return user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return curret card object', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.deep.equal({"id": 1, "question": "What allows you to define a set of related information using key-value pairs?", "answers": ["object", "array", "function"], "correctAnswer": "object"});
  });

  it('should evaluate the user guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card);

    expect(turn.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it('should give user feedback based on user guess evalutation', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card);

    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.deep.equal('incorrect!');

    turn2.evaluateGuess();
    expect(turn2.giveFeedback()).to.deep.equal('correct!');
  });
});

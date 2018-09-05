const assert = require('assert');
const mocha = require("mocha");
//const chai = require("chai");
const cardValidator = require('../index');
//const expect = chai.expect;

describe('cardValidator()', function () {
  it('Deve retornar true', () => {
    assert.equal(cardValidator(5234210210864429), true);
  });
  it('Deve retornar true', () => {
    assert.equal(cardValidator(36490102462661), true);
  });
  it('Deve retornar false', () => {
    assert.equal(cardValidator(15975324555466), false);
  });
  it('Deve retornar false', () => {
    assert.equal(cardValidator(''), false);
  });
  it('Deve retornar false', () => {
    assert.equal(cardValidator('olá'), false);
  });
});
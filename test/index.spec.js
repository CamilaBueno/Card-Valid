const assert = require('assert');
//const mocha = require("mocha");
//const chai = require("chai");
const cardValidator = require('../index');
//const expect = chai.expect;

describe('cardValidator()', function() {
    it('deve retornar true ou false', () => {
      assert.equal(cardValidator(5234210210864429), 'true');
    });
});
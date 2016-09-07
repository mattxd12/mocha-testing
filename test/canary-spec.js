const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;


describe('Canary test', () => {
  it('the string hello should be hello', () => {
    const hello = 'hello';

    hello.should.be.equal('hello');
  });
  it('type of string should be string', () => {
    const str = 'qfp';

    str.should.be.a('string');
    expect(str).to.be.a('string');
    assert.typeOf(str, 'string');
})
})

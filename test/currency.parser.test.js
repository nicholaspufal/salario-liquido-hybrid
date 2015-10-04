var assert = require('assert');
var currencyParser = require('../www/js/directives/currency.parser');

describe('CurrencyParser', function() {
  it('filters out any junk that is not part of the currency', function () {
    assert.equal(currencyParser('R$1234,56'), '1234.56');
    assert.equal(currencyParser('R$   1234,56    '), '1234.56');
    assert.equal(currencyParser('1234,56 reais'), '1234.56');
  });

  it('supports comma as a decimal separator', function () {
    assert.equal(currencyParser('1234,56'), '1234.56');
  });

  it('supports dots as a decimal separator', function () {
    assert.equal(currencyParser('1234.56'), '1234.56');
  });

  it('supports dots as a thousand separator', function () {
    assert.equal(currencyParser('1.234.567.890,12'), '1234567890.12');
    assert.equal(currencyParser('1.234,56'), '1234.56');
  });
});

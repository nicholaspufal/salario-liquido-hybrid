var currencyParser = require('./currency.parser');

module.exports = function CurrencyDirective() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.push(currencyParser);
    }
  };
};

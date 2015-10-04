var brazilianCurrencyParser = require('./brazilian.currency.parser');

module.exports = function BrazilianCurrencyDirective() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.push(brazilianCurrencyParser);
    }
  };
}

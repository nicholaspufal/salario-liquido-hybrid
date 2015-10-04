function BrazilianCurrencyDirective() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.push(function (userInput) {
        var amount = userInput.replace(/,/, '.');
        return amount.replace(/[^0-9.]/g, '');
      });
    }
  };
}

module.exports = BrazilianCurrencyDirective;

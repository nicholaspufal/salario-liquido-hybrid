module.exports = function (userInput) {
  var amount = userInput.replace(/,/, '.');
  return amount.replace(/[^0-9.]/g, '');
}

module.exports = function (userInput) {
  function trimDots (element) {
    return element.replace(/\./g,'');
  }

  if (userInput.split(',').length > 1) {
    userInput = userInput.split(',').map(trimDots).join('.');
  }

  userInput = userInput.replace(/,/, '.');
  userInput = userInput.replace(/[^0-9.]/g, '');

  return userInput;
};

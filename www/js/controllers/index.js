var CalculatorController = require('./calculator');
CalculatorController.$inject = ['$scope', '$http', '$interpolate', '$ionicScrollDelegate'];

var AboutController = require('./about');

angular.module('app.controllers', [])
.controller('CalculatorCtrl', CalculatorController)
.controller('AboutCtrl', AboutController);

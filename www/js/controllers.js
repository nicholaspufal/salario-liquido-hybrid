angular.module('app.controllers', [])

.controller('CalculatorCtrl', function($scope, $http, $interpolate, $ionicScrollDelegate) {
  resetScope();

  function resetScope () {
    $scope.form = {
      dependents: 0
    };
    $scope.result = null;
  }

  function filterInput(input) {
    var input = (input || 0).toString();
    var input = input.replace(/,/, '.').replace(/[^0-9.]/g, '');
    return input;
  };

  $scope.newSubmission = function newSubmission () {
    resetScope();
    $ionicScrollDelegate.scrollTop();
  };

  $scope.calculate = function calculate () {
    var requestData = {
      grossSalary: filterInput($scope.form.grossSalary),
      dependents: $scope.form.dependents
    };

    var endpoint = $interpolate('http://104.131.75.80:3000/calculate_net_salary?grossSalary={{grossSalary}}&dependents={{dependents}}');

    $http.get(endpoint(requestData)).then(function(result) {
      $scope.result = result.data;
    });
  };
})

.controller('AboutCtrl', function($scope) {
});

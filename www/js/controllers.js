angular.module('app.controllers', [])

.controller('CalculatorCtrl', function($scope, $http, $interpolate, $ionicScrollDelegate) {
  $scope.form = {
    dependents: 0
  };

  $scope.clear = function clear () {
    $scope.result = null;
    $scope.form = {
      dependents: 0
    };
    $ionicScrollDelegate.scrollTop();
  };

  $scope.calculate = function calculate () {
    var endpoint = $interpolate('http://104.131.75.80:3000/calculate_net_salary?grossSalary={{grossSalary}}&dependents={{dependents}}');

    $http.get(endpoint($scope.form)).then(function(result) {
      $scope.result = result.data;
    });
  };
})

.controller('AboutCtrl', function($scope) {
});

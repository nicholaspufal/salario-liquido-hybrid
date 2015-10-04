function CalculatorController($scope, $http, $interpolate, $ionicScrollDelegate) {
  resetScope();

  function resetScope () {
    $scope.form = {};
    $scope.result = null;
  }

  $scope.scrollDown = function scrollDown () {
    $ionicScrollDelegate.scrollBy(0, 30);
  };

  $scope.newSubmission = function newSubmission () {
    resetScope();
    $ionicScrollDelegate.scrollTop();
  };

  $scope.calculate = function calculate () {
    console.log($scope.form.dependents);
    var requestData = {
      grossSalary: $scope.form.grossSalary,
      dependents: $scope.form.dependents
    };

    var endpoint = $interpolate('http://104.131.75.80:3000/calculate_net_salary?grossSalary={{grossSalary}}&dependents={{dependents}}');

    $http.get(endpoint(requestData)).then(function(result) {
      $ionicScrollDelegate.scrollTop();
      $scope.result = result.data;
    });
  };
}

module.exports = CalculatorController;

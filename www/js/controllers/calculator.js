function CalculatorController($scope, $http, $interpolate, $ionicScrollDelegate) {
  function resetScope () {
    $scope.form = {};
    $scope.result = null;
  }

  resetScope();

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

    var serviceUrl = "http://104.131.75.80:3000";
    var endpointTemplate = serviceUrl + "/calculate_net_salary?grossSalary={{grossSalary}}&dependents={{dependents}}";
    var endpoint = $interpolate(endpointTemplate);

    $http.get(endpoint(requestData)).then(function(result) {
      $ionicScrollDelegate.scrollTop();
      $scope.result = result.data;
    });
  };
}

module.exports = CalculatorController;

angular.module('FiveADay', []).
  controller('userController', ['$scope', '$http', 
                              function($scope, $http) {
    $http.get('/user/profile').success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);
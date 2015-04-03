(function () {
  'use strict';
  function ctrlFrameworks ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/frameworks.json')
        .success(function (data, status, headers, config) {
          $scope.frameworks = data;
          console.log('$scope.frameworks', $scope.frameworks);
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlFrameworks', ['$scope', '$http', ctrlFrameworks]);
}());

(function () {
  'use strict';
  function ctrlTools ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/tools.json')
        .success(function (data, status, headers, config) {
          $scope.tools = data;
          console.log('$scope.tools', $scope.tools);
        })
        .error(function (data, status, headers, config) {
      });
    };
  }

  angular.module('websites').controller('CtrlTools', ['$scope', '$http', ctrlTools]);
}());

(function () {
  'use strict';
  function ctrlResource ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/resource.json')
        .success(function (data, status, headers, config) {
          $scope.resources = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlResource', ['$scope', '$http', ctrlResource]);
}());

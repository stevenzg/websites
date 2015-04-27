(function () {
  'use strict';
  function ctrlLibs ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/libs.json')
        .success(function (data, status, headers, config) {
          $scope.libs = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlLibs', ['$scope', '$http', ctrlLibs]);
}());

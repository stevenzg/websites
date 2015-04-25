(function () {
  'use strict';
  function ctrlServices ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/services.json')
        .success(function (data, status, headers, config) {
          $scope.services = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlServices', ['$scope', '$http', ctrlServices]);
}());

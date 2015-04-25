(function () {
  'use strict';
  function ctrlWork ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/jobs.json')
        .success(function (data, status, headers, config) {
          $scope.jobs = data;
        })
        .error(function (data, status, headers, config) {
        });
    };

    $scope.readInformationTechnology = function () {
      $http.get('json/IT.json')
        .success(function (data, status, headers, config) {
          $scope.ITs = data;
        })
        .error(function (data, status, headers, config) {
        });
    };

  }

  angular.module('websites').controller('CtrlWork', ['$scope', '$http', ctrlWork]);
}());

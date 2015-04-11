(function () {
  'use strict';
  function ctrlWork ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/jobs.json')
        .success(function (data, status, headers, config) {
          $scope.jobs = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlWork', ['$scope', '$http', ctrlWork]);
}());

(function () {
  'use strict';
  function ctrlCoding ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/coding.json')
        .success(function (data, status, headers, config) {
          $scope.codings = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlCoding', ['$scope', '$http', ctrlCoding]);
}());

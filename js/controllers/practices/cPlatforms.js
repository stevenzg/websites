(function () {
  'use strict';
  function ctrlPlatforms ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/platforms.json')
        .success(function (data, status, headers, config) {
          $scope.platforms = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlPlatforms', ['$scope', '$http', ctrlPlatforms]);
}());

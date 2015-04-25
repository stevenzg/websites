(function () {
  'use strict';
  function ctrlThemes ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/practices/themes.json')
        .success(function (data, status, headers, config) {
          $scope.themes = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlThemes', ['$scope', '$http', ctrlThemes]);
}());

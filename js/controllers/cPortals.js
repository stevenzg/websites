(function () {
  'use strict';
  function ctrlPortals ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/portals.json')
        .success(function (data, status, headers, config) {
          $scope.portals = data;
          console.log('$scope.portals', $scope.portals);
        })
        .error(function (data, status, headers, config) {
      });
    };
  }

  angular.module('websites').controller('CtrlPortals', ['$scope', '$http', ctrlPortals]);
}());

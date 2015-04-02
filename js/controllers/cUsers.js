/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlUsers ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/users.json')
        .success(function (data, status, headers, config) {
          $scope.users = data;
          console.log('$scope.users', $scope.users);
        })
        .error(function (data, status, headers, config) {
      });
    };
  }

  angular.module('websites').controller('CtrlUsers', ['$scope', '$http', ctrlUsers]);
}());

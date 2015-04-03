(function () {
  'use strict';
  function ctrlCommunities ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/communities.json')
        .success(function (data, status, headers, config) {
          $scope.communities = data;
          console.log('$scope.users', $scope.users);
        })
        .error(function (data, status, headers, config) {
      });
    };
  }

  angular.module('websites').controller('CtrlCommunities', ['$scope', '$http', ctrlCommunities]);
}());

(function () {
  'use strict';
  function ctrlUsers ($scope, SitesAPI) {
    SitesAPI.readJSON('json/users.json').then(function (response) {
      $scope.users = response.data;
    });
  }

  angular.module('websites').controller('CtrlUsers', ['$scope', 'SitesAPI', ctrlUsers]);
}());

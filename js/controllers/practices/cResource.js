(function () {
  'use strict';
  function ctrlResource ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/resource.json').then(function (response) {
      $scope.resources = response.data;
    });
  }

  angular.module('websites').controller('CtrlResource', ['$scope', 'SitesAPI', ctrlResource]);
}());

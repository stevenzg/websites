(function () {
  'use strict';
  function ctrlLibs ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/libs.json').then(function (response) {
      $scope.libs = response.data;
    });
  }

  angular.module('websites').controller('CtrlLibs', ['$scope', 'SitesAPI', ctrlLibs]);
}());

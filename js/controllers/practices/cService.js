(function () {
  'use strict';
  function ctrlServices ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/services.json').then(function (response) {
      $scope.services = response.data;
    });
  }

  angular.module('websites').controller('CtrlServices', ['$scope', 'SitesAPI', ctrlServices]);
}());

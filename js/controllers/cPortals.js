(function () {
  'use strict';
  function ctrlPortals ($scope, SitesAPI) {
    SitesAPI.readJSON('json/portals.json').then(function (response) {
      $scope.portals = response.data;
    });
  }

  angular.module('websites').controller('CtrlPortals', ['$scope', 'SitesAPI', ctrlPortals]);
}());

(function () {
  'use strict';
  function ctrlPlatforms ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/platforms.json').then(function (response) {
      $scope.platforms = response.data;
    });
  }

  angular.module('websites').controller('CtrlPlatforms', ['$scope', 'SitesAPI', ctrlPlatforms]);
}());

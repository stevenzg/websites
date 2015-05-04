(function () {
  'use strict';
  function ctrlGame ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/game.json').then(function (response) {
      $scope.games = response.data;
    });
  }

  angular.module('websites').controller('CtrlGame', ['$scope', 'SitesAPI', ctrlGame]);
}());

(function () {
  'use strict';
  function ctrlThemes ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/themes.json').then(function (response) {
      $scope.themes = response.data;
    });
  }

  angular.module('websites').controller('CtrlThemes', ['$scope', 'SitesAPI', ctrlThemes]);
}());

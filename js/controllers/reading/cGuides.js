(function () {
  'use strict';
  function ctrlReadingGuides ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/guides.json').then(function (response) {
      $scope.guides = response.data;
    });
  }

  angular.module('websites').controller('CtrlGuides', ['$scope', 'SitesAPI', ctrlReadingGuides]);
}());

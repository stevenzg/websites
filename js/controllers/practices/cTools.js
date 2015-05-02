(function () {
  'use strict';
  function ctrlTools ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/tools.json').then(function (response) {
      $scope.tools = response.data;
    });
  }

  angular.module('websites').controller('CtrlTools', ['$scope', 'SitesAPI', ctrlTools]);
}());

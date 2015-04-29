(function () {
  'use strict';
  function ctrlFrameworks ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/frameworks.json').then(function (response) {
      $scope.frameworks = response.data;
    });
  }

  angular.module('websites').controller('CtrlFrameworks', ['$scope', 'SitesAPI', ctrlFrameworks]);
}());

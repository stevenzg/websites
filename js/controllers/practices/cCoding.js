(function () {
  'use strict';
  function ctrlCoding ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/coding.json').then(function (response) {
      $scope.codings = response.data;
    });
  }

  angular.module('websites').controller('CtrlCoding', ['$scope', 'SitesAPI', ctrlCoding]);
}());

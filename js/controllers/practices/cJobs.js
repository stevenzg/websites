(function () {
  'use strict';
  function ctrlJobs ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/jobs.json').then(function (response) {
      $scope.jobs = response.data;
    });
  }

  angular.module('websites').controller('CtrlJobs', ['$scope', 'SitesAPI', ctrlJobs]);
}());

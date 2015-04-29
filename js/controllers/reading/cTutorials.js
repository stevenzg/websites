/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlTutorials ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/tutorials.json').then(function (response) {
      $scope.tutorials = response.data;
    });
  }

  angular.module('websites').controller('CtrlTutorials', ['$scope', 'SitesAPI', ctrlTutorials]);
}());

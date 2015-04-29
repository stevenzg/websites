/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlNews ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/news.json').then(function (response) {
      $scope.newss = response.data;
    });
  }

  angular.module('websites').controller('CtrlNews', ['$scope', 'SitesAPI', ctrlNews]);
}());

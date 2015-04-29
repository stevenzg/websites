(function () {
  'use strict';
  function ctrlCommunities ($scope, SitesAPI) {
    SitesAPI.readJSON('json/communities.json').then(function (response) {
      $scope.communities = response.data;
    });
  }

  angular.module('websites').controller('CtrlCommunities', ['$scope', 'SitesAPI', ctrlCommunities]);
}());

(function () {
  'use strict';
  function ctrlSelfBookMarks ($scope, SitesAPI) {
    SitesAPI.readJSON('json/selfbookmarks.json').then(function (response) {
      $scope.bookmarks = response.data;
    });
  }

  angular.module('websites').controller('CtrlSelfBookMarks', ['$scope', 'SitesAPI', ctrlSelfBookMarks]);
}());

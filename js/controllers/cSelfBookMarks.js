(function () {
  'use strict';
  function ctrlSelfBookMarks ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/selfbookmarks.json')
        .success(function (data, status, headers, config) {
          $scope.bookmarks = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlSelfBookMarks', ['$scope', '$http', ctrlSelfBookMarks]);
}());

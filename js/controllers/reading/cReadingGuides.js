/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlReadingGuides ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/reading/guides.json')
        .success(function (data, status, headers, config) {
          $scope.guides = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlReadingGuides', ['$scope', '$http', ctrlReadingGuides]);
}());

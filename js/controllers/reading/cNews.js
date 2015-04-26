/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlNews ($scope, $http) {
    $scope.initialization = function () {
      $http.get('json/reading/news.json')
        .success(function (data, status, headers, config) {
          $scope.newss = data;
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlNews', ['$scope', '$http', ctrlNews]);
}());

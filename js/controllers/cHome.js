/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlHome ($scope, $http) {
    $scope.initialization = function () {
      console.log('yeah');
      //$('.single-item').slick();
      $('.carousel').carousel({
        interval: 2000
      })
    };
  }

  angular.module('websites').controller('CtrlHome', ['$scope', '$http', ctrlHome]);
}());

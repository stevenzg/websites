(function () {
  'use strict';
  function ctrlReading ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.initialization = function () {

    };
  }

  angular.module('websites').controller('CtrlReading', ['$scope', '$location', ctrlReading]);
}());

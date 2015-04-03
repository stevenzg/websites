(function () {
  'use strict';
  function ctrlNavbar ($scope, $location) {
    //$scope.currentPage = 'home';

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.initialization = function () {

    };
  }

  angular.module('websites').controller('CtrlNavbar', ['$scope', '$location', ctrlNavbar]);
}());

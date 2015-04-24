(function () {
  'use strict';
  function ctrlNavbar ($scope, $location) {
    $scope.showMainNav = false;
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.isReading = function () {
      var currentPage = $location.path();
      var booResult = false;
      if (currentPage.indexOf('/reading') !== -1 ) {
        booResult = true;
      }
      return booResult;
    };

    $scope.initialization = function () {

    };

    $scope.toggleMainMenu = function () {
      console.log('@@@!!!toggleMainMenu???');
      $scope.showMainNav = !$scope.showMainNav;
    };
  }

  angular.module('websites').controller('CtrlNavbar', ['$scope', '$location', ctrlNavbar]);
}());

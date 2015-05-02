(function () {
  'use strict';
  function ctrlReading ($scope, $location, $state) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.initialization = function () {

    };

    $scope.selectedIndex = 0;
    $scope.reading = function (type) {
      switch (type) {
        case 'guides':
          $scope.selectedIndex = 0;
          $state.go('reading.guides');
            break;
        case 'articles':
          $scope.selectedIndex = 1;
          $state.go('reading.articles');
              break;
        case 'tutorials':
          $scope.selectedIndex = 2;
          $state.go('reading.tutorials');
              break;
      }
    };

  }

  angular.module('websites').controller('CtrlReading', ['$scope', '$location', '$state', ctrlReading]);
}());

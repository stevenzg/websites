(function () {
  'use strict';
  function ctrlPractices($scope, $http, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.showDocsNav = false;

    $scope.toggleDocsMenu = function () {
      $scope.showDocsNav = !$scope.showDocsNav;
    };
  }

  angular.module('websites').controller('CtrlPractices', ['$scope', '$http', '$location', ctrlPractices]);
}());

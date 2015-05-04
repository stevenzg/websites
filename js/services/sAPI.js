(function () {
  'use strict';

  angular.module('websites').factory('SitesAPI', ['$http', function ($http) {
    return {
      readJSON: function (strURL) {
        var promise = $http.get(strURL).then(
          function (response) {
            return response;
          },
          function (response) {
            return response;
          }
        );

        return promise;
      }
    }
  }]);
}());

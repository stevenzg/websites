/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlArticles ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/articles.json').then(function (response) {
      $scope.articles = response.data;
    });
  }

  angular.module('websites').controller('CtrlArticles', ['$scope', 'SitesAPI', ctrlArticles]);
}());

(function () {
  'use strict';

  function funcAppRouters($stateProvider, $urlRouterProvider) {
    var router,
      routers = {
        'home': {
          url: '',
          templateUrl: 'views/home.html',
          title: 'Home'
        },
        'users': {
          url: '/users',
          templateUrl: 'views/users.html',
          title: 'Users'
        },
        'articles': {
          url: '/articles',
          templateUrl: 'views/reading/articles.html',
          title: 'Articles'
        }
      };

    for (router in routers) {
      $stateProvider.state(router, {
        url: routers[router].url,
        templateUrl: routers[router].templateUrl,
        title: routers[router].title
      });
    }

    $urlRouterProvider.otherwise('');
  }


  function funcInitRun($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      $rootScope.strHTMLTitle = toState.title;
    });
  }

  angular.module('websites', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', funcAppRouters])
    .run(['$rootScope', '$state', funcInitRun]);

}());

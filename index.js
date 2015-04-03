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
        },
        'communities': {
          url: '/communities',
          templateUrl: 'views/communities.html',
          title: 'Communities'
        },
        'portals': {
          url: '/portals',
          templateUrl: 'views/portals.html',
          title: 'Portals'
        },
        'tools': {
          url: '/tools',
          templateUrl: 'views/tools.html',
          title: 'Tools'
        },
        'frameworks': {
          url: '/frameworks',
          templateUrl: 'views/frameworks.html',
          title: 'Frameworks'
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

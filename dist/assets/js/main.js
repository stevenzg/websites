(function () {
  'use strict';
  function ctrlCommunities ($scope, SitesAPI) {
    SitesAPI.readJSON('json/communities.json').then(function (response) {
      $scope.communities = response.data;
    });
  }

  angular.module('websites').controller('CtrlCommunities', ['$scope', 'SitesAPI', ctrlCommunities]);
}());

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

(function () {
  'use strict';
  function ctrlPortals ($scope, SitesAPI) {
    SitesAPI.readJSON('json/portals.json').then(function (response) {
      $scope.portals = response.data;
    });
  }

  angular.module('websites').controller('CtrlPortals', ['$scope', 'SitesAPI', ctrlPortals]);
}());

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

(function () {
  'use strict';
  function ctrlSelfBookMarks ($scope, SitesAPI) {
    SitesAPI.readJSON('json/selfbookmarks.json').then(function (response) {
      $scope.bookmarks = response.data;
    });
  }

  angular.module('websites').controller('CtrlSelfBookMarks', ['$scope', 'SitesAPI', ctrlSelfBookMarks]);
}());

(function () {
  'use strict';
  function ctrlUsers ($scope, SitesAPI) {
    SitesAPI.readJSON('json/users.json').then(function (response) {
      $scope.users = response.data;
    });
  }

  angular.module('websites').controller('CtrlUsers', ['$scope', 'SitesAPI', ctrlUsers]);
}());

(function () {
  'use strict';

  angular.module('websites').factory('SitesAPI', function ($http) {
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
  });
}());

(function () {
  'use strict';
  function ctrlCoding ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/coding.json').then(function (response) {
      $scope.codings = response.data;
    });
  }

  angular.module('websites').controller('CtrlCoding', ['$scope', 'SitesAPI', ctrlCoding]);
}());

(function () {
  'use strict';
  function ctrlFrameworks ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/frameworks.json').then(function (response) {
      $scope.frameworks = response.data;
    });
  }

  angular.module('websites').controller('CtrlFrameworks', ['$scope', 'SitesAPI', ctrlFrameworks]);
}());

(function () {
  'use strict';
  function ctrlJobs ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/jobs.json').then(function (response) {
      $scope.jobs = response.data;
    });
  }

  angular.module('websites').controller('CtrlJobs', ['$scope', 'SitesAPI', ctrlJobs]);
}());

(function () {
  'use strict';
  function ctrlLibs ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/libs.json').then(function (response) {
      $scope.libs = response.data;
    });
  }

  angular.module('websites').controller('CtrlLibs', ['$scope', 'SitesAPI', ctrlLibs]);
}());

(function () {
  'use strict';
  function ctrlPlatforms ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/platforms.json').then(function (response) {
      $scope.platforms = response.data;
    });
  }

  angular.module('websites').controller('CtrlPlatforms', ['$scope', 'SitesAPI', ctrlPlatforms]);
}());

(function () {
  'use strict';
  function ctrlResource ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/resource.json').then(function (response) {
      $scope.resources = response.data;
    });
  }

  angular.module('websites').controller('CtrlResource', ['$scope', 'SitesAPI', ctrlResource]);
}());

(function () {
  'use strict';
  function ctrlServices ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/services.json').then(function (response) {
      $scope.services = response.data;
    });
  }

  angular.module('websites').controller('CtrlServices', ['$scope', 'SitesAPI', ctrlServices]);
}());

(function () {
  'use strict';
  function ctrlThemes ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/themes.json').then(function (response) {
      $scope.themes = response.data;
    });
  }

  angular.module('websites').controller('CtrlThemes', ['$scope', 'SitesAPI', ctrlThemes]);
}());

(function () {
  'use strict';
  function ctrlTools ($scope, SitesAPI) {
    SitesAPI.readJSON('json/practices/tools.json').then(function (response) {
      $scope.tools = response.data;
    });
  }

  angular.module('websites').controller('CtrlTools', ['$scope', 'SitesAPI', ctrlTools]);
}());

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

(function () {
  'use strict';
  function ctrlReadingGuides ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/guides.json').then(function (response) {
      $scope.guides = response.data;
    });
  }

  angular.module('websites').controller('CtrlGuides', ['$scope', 'SitesAPI', ctrlReadingGuides]);
}());

/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlNews ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/news.json').then(function (response) {
      $scope.newss = response.data;
    });
  }

  angular.module('websites').controller('CtrlNews', ['$scope', 'SitesAPI', ctrlNews]);
}());

/**
 * Created by guoyinfeng on 4/2/15.
 */
(function () {
  'use strict';
  function ctrlTutorials ($scope, SitesAPI) {
    SitesAPI.readJSON('json/reading/tutorials.json').then(function (response) {
      $scope.tutorials = response.data;
    });
  }

  angular.module('websites').controller('CtrlTutorials', ['$scope', 'SitesAPI', ctrlTutorials]);
}());

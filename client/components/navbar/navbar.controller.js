'use strict';

angular.module('hackathonApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/myhome'
    },
    {
        'title': 'Timeline',
        'link': '/mytimeline'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

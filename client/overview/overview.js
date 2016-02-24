'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/myoverview',
        templateUrl: 'overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });

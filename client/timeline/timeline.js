'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'timeline/timeline.html',
        controller: 'TimelineCtrl'
      });
  });

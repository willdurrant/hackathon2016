'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/mytimeline',
        templateUrl: 'timeline/timeline.html',
        controller: 'TimelineCtrl'
      });
  });

'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/myhome',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

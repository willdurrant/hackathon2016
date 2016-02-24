'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boarding', {
        url: '/myboarding',
        templateUrl: 'boarding/boarding.html',
        controller: 'BoardingCtrl'
      });
  });

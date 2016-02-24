'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('insurance', {
        url: '/myinsurance',
        templateUrl: 'insurance/insurance.html',
        controller: 'InsuranceCtrl'
      });
  });
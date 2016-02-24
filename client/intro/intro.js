'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'intro/intro.html',
        controller: 'IntroCtrl'
      })
      .state('intro2', {
        url: '/myintro2',
        templateUrl: 'intro/intro2.html',
        controller: 'IntroCtrl'
      })
      .state('intro3', {
        url: '/myintro3',
        templateUrl: 'intro/intro3.html',
        controller: 'IntroCtrl'
      })
      .state('intro4', {
        url: '/myintro4',
        templateUrl: 'intro/intro4.html',
        controller: 'IntroCtrl'
      })
      .state('intro5', {
        url: '/myintro5',
        templateUrl: 'intro/intro5.html',
        controller: 'IntroCtrl'
      })
      .state('intro6', {
        url: '/myintro6',
        templateUrl: 'intro/intro6.html',
        controller: 'IntroCtrl'
      });
  });

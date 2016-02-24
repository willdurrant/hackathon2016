'use strict';

angular.module('hackathonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/products',
        templateUrl: 'product/product.html',
        controller: 'ProductCtrl'
      });
  });

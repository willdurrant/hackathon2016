'use strict';

angular.module('hackathonApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $scope.theProducts = [];

    $http.get('/api/products').success(function(theProducts) {
      $scope.theProducts = theProducts;
    });
  });

'use strict';

describe('Controller: BoardingCtrl', function () {

  // load the controller's module
  beforeEach(module('hackathonApp'));

  var BoardingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardingCtrl = $controller('BoardingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

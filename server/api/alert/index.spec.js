'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var alertCtrlStub = {
  index: 'alertCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var alertIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './alert.controller': alertCtrlStub
});

describe('Alert API Router:', function() {

  it('should return an express router instance', function() {
    alertIndex.should.equal(routerStub);
  });

  describe('GET /api/alerts', function() {

    it('should route to alert.controller.index', function() {
      routerStub.get
        .withArgs('/', 'alertCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});

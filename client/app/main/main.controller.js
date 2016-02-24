'use strict';

angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope, $http, notifications, $interval) {
    console.log('MainCtrl called..');
    $scope.awesomeThings = [];

    startNotifications($interval, notifications);

    //$( document ).ready(function() {
    //  var i = 1;
    //  var sampleMessages = [ "First message", "Second message", "Third, now repeat" ];
    //  $interval(function() {
    //    var newText = sampleMessages[i++ % sampleMessages.length];
    //    notifications.showSuccess(newText);
    //  }, 3000);
    //});

    //var notificationsObjArray = [{
    // 'level':1,
    //  'msg':'blah1111'
    //},{
    //  'level':2,
    //  'msg':'blah1111'
    //},{
    //  'level':3,
    //  'msg':'blah1111'
    //},{
    //  'level':1,
    //  'msg':'blah1111'
    //},{
    //  'level':2,
    //  'msg':'blah1111'
    //},{
    //  'level':3,
    //  'msg':'blah1111'
    //},{
    //  'level':1,
    //  'msg':'blah1111'
    //},{
    //  'level':2,
    //  'msg':'blah1111'
    //}];
    //
    //while(true) {
    //
    //  //every 30 secs generate random number 1-10
    //  //access notificationsObjArray[randomNum]
    //  // chosen notificationsObjArray.level == 1 {
    //  notifications.showWarning(notificationsObjArray.msg)
    //}
    //
    //
    //}



    $scope.showError = function () {
      notifications.showError('Oops! Something bad just happened!');
    };
    $scope.showWarning = function () {
      notifications.showWarning('Hey! Take a look <em>here</em>..');
    };
    $scope.showSuccess = function () {
      notifications.showSuccess('Congrats! Life is great!');
    };

    $scope.closeAll = function () {
      notifications.closeAll();
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    //$scope.carousel1Images = hackathonAppService.getImageData();

    $scope.carousel1Images = ['../assets/images/image1.jpg','../assets/images/image2.jpg','../assets/images/image3.jpg'];
    $scope.carousel2Images = ['../assets/images/image2.jpg','../assets/images/image3.jpg','../assets/images/image1.jpg'];
    $scope.carousel3Images = ['../assets/images/image3.jpg','../assets/images/image1.jpg','../assets/images/image2.jpg'];
    $scope.carousel4Images = ['../assets/images/image1.jpg','../assets/images/image2.jpg','../assets/images/image3.jpg'];


  });

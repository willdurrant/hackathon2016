'use strict';

angular.module('hackathonApp')
  .controller('TimelineCtrl', function ($scope, notifications, $interval, $http) {
    console.log('TimelineCtrl called...');
    $scope.message = 'Hello';

    startNotifications($interval, notifications, $http);

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
      "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
      "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
      "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'Before you go',
      when: '11 hours ago via Twitter',
      content: 'Some awesome content.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Flight from Gatwick',
      when: '12 hours ago via Twitter',
      content: 'More awesome content.'
    }, {
      badgeClass: 'default',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Out and about in NYC',
      titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
      contentHtml: lorem,
      footerContentHtml: '<a href="/myoverview">CTA1</a> <a href="/">CTA2</a>'
    }];

    $scope.leg = {
      'legName': 'Barcelona Trip',
      'legStartDate': '10-Mar-2016',
      'legEndDate': '17-Mar-2016',
      'stages': [
        {'stageName': 'Getting There',
          badgeClass: 'warn',
          badgeIconClass: 'glyphicon-check',
          footerContentHtml: '<a href="/myoverview">Details</a>'
        },
        {'stageName': 'Out & About',
          badgeClass: 'info',
          badgeIconClass: 'glyphicon-check',
          footerContentHtml: '<a href="/myoverview">Details</a>'
        },
        {'stageName': 'Coming Home',
          badgeClass: 'info',
          badgeIconClass: 'glyphicon-check',
          footerContentHtml: '<a href="/myoverview">Details</a>'
        }
      ]
    };


  });

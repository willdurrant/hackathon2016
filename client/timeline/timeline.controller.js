'use strict';

angular.module('hackathonApp')
  .controller('TimelineCtrl', function ($scope) {
    console.log('TimelineCtrl called...');
    $scope.message = 'Hello';

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
      "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
      "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
      "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      when: '11 hours ago via Twitter',
      content: 'Some awesome content.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Second heading',
      when: '12 hours ago via Twitter',
      content: 'More awesome content.'
    }, {
      badgeClass: 'default',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Third heading',
      titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
      contentHtml: lorem,
      footerContentHtml: '<a href="/">Continue Reading</a>'
    }];

  });

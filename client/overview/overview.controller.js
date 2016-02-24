'use strict';

angular.module('hackathonApp')
  .controller('OverviewCtrl', function ($scope, hackathonAppService) {

     $scope.carousel1Images = [
       { src: '../assets/images/visa.jpg',
         title: 'Visa',
         link: '../assets/images/boardingPass.png'
       },
       {
         src: '../assets/images/insurance.jpg',
         title: 'Insurance',
         link: '/myinsurance'
       },
       { src: '../assets/images/fx.png',
       title: 'Money',
         link: '/myoverview'
       },
       {
       src: '../assets/images/health.png',
       title: 'Health',
         link: '/myoverview'
       },
       {
       src: '../assets/images/pets.jpg',
       title: 'Pets',
         link: '/myoverview'
       }
     ];

    $scope.carousel2Images = [
      {src: '../assets/images/traffic-jam.jpg',
        title: 'Travel Updates',
        link: '/myoverview'},
      {src: '../assets/images/nycairportlimos.jpg',
        title: 'Transfers',
        link: '/myoverview'}];


     $scope.carousel3Images = [
       {src: '../assets/images/check-in.jpg',
         title: 'Check In',
       link:'/myboarding'},
       {src: '../assets/images/check-in.jpg',
         title: 'Fast-Track',
         link: '/myoverview'},
       {src: '../assets/images/fasttrack.jpg',
         title: 'Lounge Access',
         link: '/myoverview'},
       {src: '../assets/images/airport_limo_services.jpg',
         title: 'Shopping',
         link: '/myoverview'}];

    $scope.carousel4Images = [
      {src: '../assets/images/airport-pickup.jpg',
        title: 'Hotel Pickup',
        link: '/myoverview'},
      {src: '../assets/images/check-in.jpg',
        title: 'Hotel Check-In',
        link: '/myoverview'},
      {src: '../assets/images/check-in.jpg',
        title: 'Lounge Access',
        link: '/myoverview'}];


  });

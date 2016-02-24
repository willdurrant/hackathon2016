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
       { src: '../assets/images/FX.jpg',
       title: 'Money'
       },
       {
       src: '../assets/images/imgres.png',
       title: 'Health'
       },
       {
       src: '../assets/images/pets.jpg',
       title: 'Pets'
       }
     ];

    $scope.carousel2Images = [
      {src: '../assets/images/traffic-jam.jpg',
        title: 'Travel Updates'},
      {src: '../assets/images/nycairportlimos.jpg',
        title: 'Transfers'}];


     $scope.carousel3Images = [
       {src: '../assets/images/check-in.jpg',
         title: 'Check In',
       link:'/myboarding'},
       {src: '../assets/images/check-in.jpg',
         title: 'Fast-Track'},
       {src: '../assets/images/check-in.jpg',
         title: 'Lounge Access'},
       {src: '../assets/images/airport_limo_services.jpg',
         title: 'Shopping'}];

    $scope.carousel4Images = [
      {src: '../assets/images/airport-pickup.jpg',
        title: 'Hotel Pickup'},
      {src: '../assets/images/check-in.jpg',
        title: 'Hotel Check-In'},
      {src: '../assets/images/check-in.jpg',
        title: 'Lounge Access'}];


  });

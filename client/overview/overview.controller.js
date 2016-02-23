'use strict';

angular.module('hackathonApp')
  .controller('OverviewCtrl', function ($scope, hackathonAppService) {

     $scope.carousel1Images = [
       { src: '../assets/images/visa.jpg',
       title: 'Visa requirements'
       },
       { src: '../assets/images/FX.jpg',
       title: 'Organise currency'
       },
       {
       src: '../assets/images/imgres.png',
       title: 'Inoculatiion'
       },
       {
       src: '../assets/images/insurance.jpg',
       title: 'Insurance'
       },
       {
       src: '../assets/images/pets.jpg',
       title: 'Pets'
       }
     ];
     $scope.carousel2Images = ['../assets/images/airport_limo_services.jpg','../assets/images/check-in.jpg','../assets/images/Parking.jpg'];
     $scope.carousel3Images = ['../assets/images/travel-visa1.jpg','../assets/images/visa.jpg','../assets/images/Shopping.jpg'];
     $scope.carousel4Images = ['../assets/images/lounge.jpg','../assets/images/Hotel-Check-In-620x480.jpg','../assets/images/IMG_5017.jpg'];

  });

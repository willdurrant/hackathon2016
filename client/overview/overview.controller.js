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
     $scope.carousel2Images = ['../assets/images/image2.jpg','../assets/images/image3.jpg','../assets/images/image1.jpg'];
     $scope.carousel3Images = ['../assets/images/image3.jpg','../assets/images/image1.jpg','../assets/images/image2.jpg'];
     $scope.carousel4Images = ['../assets/images/image1.jpg','../assets/images/image2.jpg','../assets/images/image3.jpg'];

  });

/**
 * Created by aliversi on 22/02/2016.
 */

var services = angular.module('hackathonApp.services', []);

var hackathonAppService = function ($http) {

    hackathonAppService.getImageData = function () {
      //  return $http.get('/api/product');

    return
        [
        {'title':'Insurance','imgName':'../assets/images/image1.jpg'},
        {'title':'Insurance','imgName':'../assets/images/image2.jpg'},
        {'title':'Insurance','imgName':'../assets/images/image3.jpg'}
        ]

    };

    return hackathonAppService;
};

hackathonAppService.$inject = ['$http'];
services.factory('hackathonAppService', hackathonAppService);

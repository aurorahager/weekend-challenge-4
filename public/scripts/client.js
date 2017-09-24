//set angular to myApp
var myApp = angular.module( 'myApp', [] );

myApp.controller('GalleryController', function ($http) {
    console.log('ng');
    //set vm to this
    var vm = this;
    // global array to store photo Objects
     vm.photos = []; 
    //function to get all photos 
    vm.getPhotos = function () {
        $http ({
            method: 'GET',
            url: '/photos'
        }).then( function (response) {
            console.log('response from photos get:', response);
            vm.photos = response.data;
            console.log('vm.photos:', vm.photos);
            
        })//END GET 
    }//END vm.getPhotos
    // function to get click count
     vm.favPhoto = function (photo) {
        console.log('liked!');
        photo.clicks++
       $http ({
           method: 'POST',
           url: '/photos',
           data: vm.photos
       }).then( function (response) {
            console.log('GET response:', response);
            vm.getPhotos();
       })//END PUT
    }//END vm.favPhoto
})//END myApp.controller
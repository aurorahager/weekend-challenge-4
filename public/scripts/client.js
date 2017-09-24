//set angular to myApp
var myApp = angular.module( 'myApp', [] );

myApp.controller('GalleryController', function () {
    console.log('ng');
    var vm = this;
     vm.favPhoto = function () {
        console.log('liked!');
        
     }
})//END myApp.controller
var softUni=angular.module('softUniModule',['ngRoute', 'ui.bootstrap'])
.config(function($routeProvider){
        $routeProvider.when('/register',{
            templateUrl:'templates/register.html'
        });
        $routeProvider.when('/ads',{
            templateUrl:'templates/all-ads.html',
            controller: 'AdsController'
        });
        $routeProvider.when('/ads/page=:page', {
            templateUrl:'templates/all-ads.html',
            controller: 'AdsController'
        });
        $routeProvider.when('/login',{
            templateUrl:'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/logout',{
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/editProfile',{
            templateUrl:'templates/editProfile.html'
        });
        $routeProvider.when('/newAdv',{
            templateUrl:'templates/newAdv.html'
        });
        $routeProvider.when('/editAdv',{
            templateUrl:'templates/editAdv.html'
        });
        $routeProvider.otherwise({redirectTo:'/ads'});
    });
//controller: 'UserPublishNewAdController'
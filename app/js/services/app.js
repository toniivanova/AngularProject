var softUni=angular.module('softUniModule',['ngRoute', 'ui.bootstrap', 'LocalStorageModule', 'angular-loading-bar'])
.config(function($routeProvider){
        $routeProvider.when("/register", {
            controller: "signupController",
            templateUrl: "templates/register.html"
        });
        $routeProvider.when("/login", {
            controller: "loginController",
            templateUrl: "templates/login.html"
        });
        $routeProvider.when('/ads',{
            controller: 'AdsController',
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/ads/page=:page', {
            controller: 'AdsController',
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when("/refresh", {
            controller: "refreshController",
            templateUrl: "templates/refresh.html"
        });

        $routeProvider.when("/tokens", {
            controller: "tokensManagerController",
            templateUrl: "templates/tokens.html"
        });

        $routeProvider.when("/associate", {
            controller: "associateController",
            templateUrl: "templates/associate.html"
        });

        $routeProvider.otherwise({redirectTo:'/ads'});
    });
//controller: 'UserPublishNewAdController'

softUni.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
var serviceBase = 'http://softuni-ads.azurewebsites.net/';
softUni.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

softUni.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

softUni.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

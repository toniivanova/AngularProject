var softUni=angular.module('softUniModule',['ngRoute', 'ngResource','ngStorage','ui.bootstrap','ngCookies','angular-growl'])

softUni.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
//softUni.constant('baseServiceUrl', 'http://localhost:1337');

softUni.config(["growlProvider", "$httpProvider", function(growlProvider, $httpProvider) {
        growlProvider.globalTimeToLive(3000);
        growlProvider.onlyUniqueMessages(true);
    }]);

    softUni.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/',{
            controller: 'AdsController',
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/ads', {
            controller: 'AdsController',
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/ads/page=:page', {
            controller: 'AdsController',
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/login',{
            controller: 'regLogController',
            templateUrl:'templates/login.html'
        });
        $routeProvider.when('/register', {
            controller: 'regLogController',
            templateUrl:'templates/register.html'
        });
        $routeProvider.when('/user', {
            controller: 'userController',
            templateUrl: 'templates/user.html'
        });
        $routeProvider.when('/user/page=:page', {
            redirectTo: '/user'
        });
        $routeProvider.when('/userAds', {
            controller: 'userAdsController',
            templateUrl: 'templates/userAds.html'
        });
        $routeProvider.when('/newAdv', {
            controller: 'newAdvController',
            templateUrl: 'templates/newAdv.html'
        });
        $routeProvider.when('/editProfile', {
            controller: 'editProfileController',
            templateUrl: 'templates/editProfile.html'
        });
        $routeProvider.otherwise({redirectTo:'/'});

        $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/user');
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }])




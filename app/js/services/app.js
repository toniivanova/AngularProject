var softUni=angular.module('softUniModule',['ngRoute', 'ngResource','ngStorage','ui.bootstrap'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/ads',{
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
            controller: 'UserCtrl',
            templateUrl: 'templates/user.html'
        });

        $routeProvider.otherwise({redirectTo:'/ads'});

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

}]);



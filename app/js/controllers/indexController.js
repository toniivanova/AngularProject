'use strict';
softUni.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/ads');
    }

    $scope.authentication = authService.authentication;

}]);
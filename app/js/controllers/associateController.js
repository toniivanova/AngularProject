'use strict';
softUni.controller('associateController', ['$scope', '$location','$timeout','authService', function ($scope, $location,$timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/ads');
        }, 2000);
    }

}]);
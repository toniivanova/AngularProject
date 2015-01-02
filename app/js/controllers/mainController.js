softUni.controller('SoftUniController', function ($scope, $location, $routeParams, mainData) {

});

softUni.controller('LoginController', function ($scope, $location) {
    $scope.title='Login page';

    $scope.credentials={username:'', password:''}

    $scope.login= function () {
        console.log($scope.credentials.username);
        $location.path('/newAd');
    };
});

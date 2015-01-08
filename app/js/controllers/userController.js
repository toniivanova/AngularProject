softUni.controller('userController', ['$rootScope', '$scope', '$location', 'reglogData', function($rootScope, $scope, $location, reglogData) {

    reglogData.user(function(res) {
        $scope.myDetails = res;
    }, function() {
        $rootScope.error = 'Failed to fetch details';

    })
    if (localStorage.username && localStorage.token) {
        //$location.path('/user/home');

        var userInfo = $('<p id="userInfo">').text(localStorage.getItem('username'));
        $('#userInfo').remove();
        //$('#userInfo').delete();
        $('#usernameLog').append(userInfo);
    }
}]);
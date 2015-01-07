softUni.controller('regLogController', ['$rootScope', '$scope', '$location', '$localStorage', 'reglogData', function($rootScope, $scope, $location, $localStorage, reglogData) {


    $scope.login = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password
        }

        reglogData.login(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                $localStorage.token = res.access_token;
                $localStorage.username = res.username;
                //window.location = "/user";
                $location.path('/user');
                console.log('Login successful!');
            }
        }, function() {
            $rootScope.error = 'Failed to login';
            console.log('Login error!');

        })
    };

    $scope.register = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword,
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone
            //adData.townId: $scope.adData.townId,
        }

        reglogData.register(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                $localStorage.token = res.token;
                //window.location = "/login"
                $location.path('/login');
                console.log('Register successful!');
            }
        }, function() {
            $rootScope.error = 'Failed to register';
            console.log('Register error!');
        })
    };

    $scope.user = function() {
        reglogData.user(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
            console.log('error:Failed to fetch details');
        })
    };

    $scope.logout = function() {
        reglogData.logout(function() {
            //window.location = "/"
            console.log('Logout is successful');
            $location.path('/login');
        }, function() {
            alert("Failed to logout!");
        });
    };
    $scope.token = $localStorage.token;
}]);

softUni.controller('userCtrl', ['$rootScope', '$scope', '$location', 'reglogData', function($rootScope, $scope, $location, reglogData) {

        reglogData.user(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';

        })
        }]);

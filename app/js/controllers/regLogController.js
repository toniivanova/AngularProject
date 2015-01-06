softUni.controller('regLogController', ['$rootScope', '$scope', '$location', '$localStorage', 'mainData', function($rootScope, $scope, $location, $localStorage, mainData) {


    $scope.login = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password
        }

        mainData.login(formData, function(res) {
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

        mainData.register(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                $localStorage.token = res.token;
                //window.location = "/login"
                $location.path('/login');
                console.log('Login successful!');
            }
        }, function() {
            $rootScope.error = 'Failed to register';
            console.log('Register error!');
        })
    };

    $scope.user = function() {
        mainData.user(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
            console.log('error:Failed to fetch details');
        })
    };

    $scope.logout = function() {
        mainData.logout(function() {
            //window.location = "/"
            console.log('Logout is successful');
            $location.path('/login');
        }, function() {
            alert("Failed to logout!");
        });
    };
    $scope.token = $localStorage.token;
}])

    .controller('userCtrl', ['$rootScope', '$scope', '$location', 'mainData', function($rootScope, $scope, $location, mainData) {

        mainData.user(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';

        })
        }]);

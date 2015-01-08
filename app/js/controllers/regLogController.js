softUni.controller('regLogController', ['$rootScope', '$scope', '$location', '$localStorage', 'reglogData', 'growl',
    function($rootScope, $scope, $location, $localStorage, reglogData, growl) {

        /*mainData.getAllTowns(function(resp){
            $scope.towns=resp;
        });*/

    $scope.login = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password
        }

        reglogData.login(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('username', res.username);
                //$localStorage.token = res.access_token;
                //$localStorage.username = res.username;
                //window.location = "/user";
                console.log('Login successful!');
                growl.success('Login is successful!');
                $location.path('/user');

            }
        }, function() {
            $rootScope.error = 'Failed to login';
            console.log('Login error!');
            growl.error('Login is error!');
        })
    };

    $scope.register = function() {

        var formData = {
            username: $scope.username,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword,
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            town: $scope.town
            //adData.townId: $scope.adData.townId,
        }

        reglogData.register(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                $localStorage.token = res.token;
                //window.location = "/login"
                console.log('Register successful!');
                growl.success('Register is successful!');
                $location.path('/login');
            }
        }, function() {
            $rootScope.error = 'Failed to register';
            console.log('Register error!');
            growl.error('Register is error!');
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
            localStorage.clear();
            console.log('Logout is successful');
            growl.success('Logout is successful!');
            $location.path('/login');
        }, function() {
            alert("Failed to logout!");
        });
    };
    $scope.token = $localStorage.token;
}]);


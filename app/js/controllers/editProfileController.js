softUni.controller('editProfileController', ['$rootScope', '$scope', '$location', '$localStorage','growl', 'filterService',
    function($rootScope, $scope, $location, $localStorage, growl, filterService, profileInfo, reglogData) {

        if (localStorage.username && localStorage.token) {
            var userInfo = $('<p id="userInfo">').text(localStorage.getItem('username'));
            $('#userInfo').remove();
            $('#usernameLog').append(userInfo);
        }

        filterService.getTowns(function(resp) {
                $scope.towns = resp;
            },
            function(error){
                growl.error(error.error_description);
            });

        editProfileController.getUser(function (resp) {
            $scope.user = resp;
//        console.log(resp);
        })

        $scope.update = function (user) {
            user.townId = Number(user.townId);
//        console.log(user);
            profileInfo.updateUser(user);
        }
        $scope.updatePassword = function (pass) {
            pass.confirmPassword = Number(pass.confirmPassword);
            pass.newPassword = Number(pass.newPassword);
            pass.oldPassword = Number(pass.oldPassword);
            profileInfo.changePass(pass);
        }

    }])
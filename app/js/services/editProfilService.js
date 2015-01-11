softUni.factory('profileInfo', function ($http, $location) {

    function getUser(success) {
        $http({
            method: 'GET',
            url: baseServiceUrl + '/api/user/profile'
        }).success(function (data) {
            success(data);
        }).error(function () {
        });
    }
    function updateUser(user) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/api/user/profile',
            data: JSON.stringify(user)
        }).success(function (data) {
            growl.success('Success update profile');
            $location.path('/user/home');
        }).error(function () {
            growl.error('Error update profile');
        })
    }
    function changePass(pass) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/api/user/changepassword',
            data: JSON.stringify(pass)
        }).success(function () {
            growl.success('Success update password');
            $location.path('/user/home');
        }).error(function () {
            growl.success('Error update password');
        })
    }
    return {
        getUser: getUser,
        updateUser: updateUser,
        changePass: changePass
    }
})
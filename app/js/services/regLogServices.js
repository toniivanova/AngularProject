'use strict';
softUni.factory('mainData', ['$http', '$localStorage', function($http, $localStorage){
    var baseUrl = "http://softuni-ads.azurewebsites.net/api/";
    function changeUser(user) {
        angular.extend(currentUser, user);
    }

    function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            var base64 = urlBase64Decode(token);
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

    var currentUser = $localStorage.username;//getUserFromToken();

    return {
        register: function(data, success, error) {
            $http.post(baseUrl + 'user/register', data).success(success).error(error)
        },
        login: function(data, success, error) {
            $http.post(baseUrl + 'user/login', data).success(success).error(error)
        },
        user: function(success, error) {
            $http.get(baseUrl + 'ads').success(success).error(error)
        },
        logout: function(success) {
            //changeUser({});
            delete $localStorage.token;
            delete $localStorage.username;
            success();
        }
    };
}
]);
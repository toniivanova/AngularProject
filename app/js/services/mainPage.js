softUni.factory('mainData', function ($http, $log) {
    return{
        getAllAds:function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/ads?PageSize=10&Startpage=1'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        },
        getAllTowns: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        },
        getAllCategories: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        },
        login: function(successCallback, errorCallback) {
            $http({method: 'POST', url: 'http://softuni-ads.azurewebsites.net/api/user/login'})
                .success(function (data, status, headers, config) {
                    successCallback(data);
                })
                .error(function (data, status, headers, config) {
                    errorCallback(data);
                })
        },
        logout: function(successCallback, errorCallback){
            $http({method: 'POST', url: url + 'logout', headers: {
                "Authorization": "Bearer " + session.get().access_token
            }})
                .success(function(data, status, headers, config){
                    successCallback(data);
                })
                .error(function(data, status, headers, config){
                    errorCallback(data);
                });
        }
    }
})
softUni.factory('mainData', function ($http, $log, $rootScope) {
    return{
        getAllAds:function(pageSize, startPage, success){
            $http({method:'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?PageSize='+pageSize+'&StartPage='+startPage})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                });
        },
        getAllTowns: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                });
        },
        getAllCategories: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                });
        },
        login: function(successCallback, errorCallback) {
            $http({method: 'POST', url: 'http://softuni-ads.azurewebsites.net/api/user/login'})
                .success(function (data, status, headers, config) {
                    successCallback(data);
                })
                .error(function (data, status, headers, config) {
                    errorCallback(data);
                });
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
        },
        getAdsFilter: function (townId, categoryId, success) {
            $rootScope.$broadcast('isLoading', true);
            $http({method:'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?townid='+townId+'&categoryid='+categoryId})
                .success(function(data) { //data, status, headers, config
                    // this callback will be called asynchronously
                    // when the response is available
                    success(data);
                })
                .error(function(data) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $log.warn(data);
                })
                .finally(function () {
                    $rootScope.$broadcast('isLoading', false);
                });
        }
    }
})
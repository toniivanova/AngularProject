softUni.factory('mainData', function ($http, $log, $rootScope) {
    return{
        getAllAds:function(pageSize, startPage, success){
            $http({method:'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads?PageSize='+pageSize+'&StartPage='+startPage})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                    growl.error(data.error_description);
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
                });
        }
    }
});

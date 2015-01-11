softUni.factory('GetAds', function ($http, $location, growl, baseServiceUrl) {
    function getToken() {
        var token = localStorage.getItem('token');
        if (!token)
            return;
        $http.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
    function getCategories(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/categories')
            .success(function (data) {
                success(data);
            })
            .error(function () {
                growl.error('Can\'t load categories');
            });
    }
    function getAllAds(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/ads')
            .success(function (data) {
                success(data);
            })
            .error(function () {
                growl.error('Can\'t load ads');
            });
    }
    function getTowns(success) {
        $http.get('http://softuni-ads.azurewebsites.net/api/towns')
            .success(function (data) {
                success(data);
            })
            .error(function () {
                growl.error('Can\'t load towns');
            });
    }
    function getAdsOfUser(success) {
        getToken();
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads'
        }).success(function (data) {
            success(data);
        }).error(function () {
            growl.error("can't load user ads!");
        })
    }

    function deleteAd(id, success, error) {
        getToken();
        var request = {
            method: 'DELETE',
            url: baseServiceUrl + '/api/user/ads/'+ id,
            data: id
        };
        $http(request)
            .success(function (data, status, headers, config) {
                growl.success('Advertisement was deleted!');
                $location.path('/userAds');
            }).error(function (data, status, headers, config) {
                growl.error("can't delete!");
            })
    }

    function createAd(ad) {
        getToken();
        $http({
            method:'POST',
            url:'http://softuni-ads.azurewebsites.net/api/user/ads',
            data:JSON.stringify(ad)
        }).success(function (data){
            growl.success('Advertisement was created!');
            $location.path('/userAds');
        }).error(function (){
            growl.error('Advertisement has NOT created! Please try again!');
        })
    }
    return {
        getCategories: getCategories,
        getAllAds: getAllAds,
        getTowns: getTowns,
        getAdsOfUser: getAdsOfUser,
        deleteAd: deleteAd,
        createAd: createAd
    };
});

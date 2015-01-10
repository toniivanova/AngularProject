softUni.controller('userController', ['$rootScope', '$scope', '$location', 'reglogData', 'userAdsService', 'growl',
    function($rootScope, $scope, $location, reglogData, userAdsService, growl) {

    reglogData.user(function(res) {
        $scope.myDetails = res;
    }, function() {
        $rootScope.error = 'Failed to fetch details';

    });

    if (localStorage.username && localStorage.token) {
        //$location.path('/user/home');

        var userInfo = $('<p id="userInfo">').text(localStorage.getItem('username'));
        $('#userInfo').remove();
        //$('#userInfo').delete();
        $('#usernameLog').append(userInfo);
    }

    $scope.statusMenuId = $rootScope.statusMenuId;

    $scope.statusMenuClicked = function (id) {
        $rootScope.statusMenuId = id;
        $scope.statusMenuId = id;
        if ($location.url().indexOf('publish') < 0) {
            reloadAllAds();
        }
    };

    $scope.userAdsParams = $rootScope.userAdsParams || {
        startPage: 1,
        pageSize: 5
    };

    reloadAllAds();

    function reloadAllAds () {
        userAdsService.getUserAds(

            function(resp) {
                $scope.data = resp;
                $scope.totalItems = $scope.data.numItems;
                if (resp.ads.length==0) {
                    growl.warning('No ads to display', {ttl: 1500});
                } else if (resp.ads.length==1) {
                    growl.info('There is only one ad', {ttl: 2500});
                } else {
                    growl.info('There are ' + resp.numItems + ' ads', {ttl: 4500});
                }
            },
            function (error) {
                growl.error(error.error_description, {ttl: 5000});
            },
            $scope.statusMenuId, $scope.userAdsParams.startPage, $scope.userAdsParams.pageSize);
    }
}]);
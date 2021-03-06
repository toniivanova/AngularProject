softUni.controller('userAdsController', ['$rootScope', '$scope', '$location', 'reglogData', 'GetAds', 'userAdsService', 'growl',
    function($rootScope, $scope, $location, reglogData, GetAds, userAdsService, growl) {

        reglogData.user(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';

        });

        if (localStorage.username && localStorage.token) {
            var userInfo = $('<p id="userInfo">').text(localStorage.getItem('username'));
            $('#userInfo').remove();
            $('#usernameLog').append(userInfo);
        }

        $scope.statusMenuId = $rootScope.statusMenuId;

        $scope.statusMenuClicked = function (id) {
            $rootScope.statusMenuId = id;
            $scope.statusMenuId = id;
            reloadAllAds();
        };

        $scope.userAdsParams = $rootScope.userAdsParams || {
            startPage: 1,
            pageSize: 5
        };

        if ($location.url().indexOf('publish') < 0) {
            reloadAllAds();
        }

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
                 growl.info('There are ' + resp.numItems + ' ads', {ttl: 2500});
                 }
                 },
                 function (error) {
                 growl.error(error.error_description, {ttl: 5000});
                 },
                $scope.statusMenuId, $scope.userAdsParams.startPage, $scope.userAdsParams.pageSize);
        }

        $scope.deleteAdv = deleteAdv;
        function deleteAdv(id) {
            GetAds.deleteAd(id);
            $location.path('/user');
        }

    }]);
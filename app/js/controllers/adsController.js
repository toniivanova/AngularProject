softUni.controller('AdsController', function ($scope, mainData, filterService, $location, $routeParams, $cookieStore) {
    $scope.adsParams = $cookieStore.get('adsParams') || {
        startPage: 1,
        pageSize: 2,
        townId: null,
        categoryId: null
    };


    $scope.setPage = function (pageNo) {
        $scope.adsParams.startPage = pageNo;
        $cookieStore.put('adsParams', $scope.adsParams);
        $location.path('/ads/page='+pageNo);
    };

    $scope.totalItems = 100000;

    if ($routeParams.page && $routeParams.page>0 ) {
        $scope.adsParams.startPage = $routeParams.page;
    }

    $scope.pageChanged = function() {
        $location.path('/ads/page='+$scope.adsParams.startPage);
    };

    $scope.pageSizeChanged = function() {
        reloadAllAds();
    };

    reloadAllAds();

    filterService.getTowns(function(resp) {
            $scope.towns = resp;
        },
        function(error){
            growl.error(error.error_description);
        });
    filterService.getCategories(function(resp) {
            $scope.categories = resp;
        },
        function(error){
            growl.error(error.error_description);
        });

    $scope.categoryClicked = function (categorySelected) {
        if (categorySelected != $scope.adsParams.categoryId) {
            $scope.adsParams.categoryId = categorySelected;
            $scope.adsParams.startPage = 1;
            $cookieStore.put('adsParams', $scope.adsParams);
            reloadAllAds();
            $location.path('/ads/page='+$scope.adsParams.startPage);
        }
    };

    $scope.townClicked = function (townSelected) {
        if (townSelected != $scope.adsParams.townId) {
            $scope.adsParams.townId = townSelected;
            $scope.adsParams.startPage = 1;
            $cookieStore.put('adsParams', $scope.adsParams);
            reloadAllAds();
            $location.path('/ads/page='+$scope.adsParams.startPage);
        }
    };

    function reloadAllAds () {
        mainData.getAllAds(
            $scope.adsParams,
            function(resp) {
                $scope.data = resp;
                $scope.totalItems = $scope.data.numItems;
            },
            function (error) {
                growl.error(error.error_description);
            });
    }

});
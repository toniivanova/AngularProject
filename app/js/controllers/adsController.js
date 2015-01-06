softUni.controller('AdsController', function ($scope,mainData, $location, $routeParams) {
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
        $location.path('/ads/page='+pageNo);
    };

    $scope.currentPage = 1;
    $scope.totalItems = 100000;
    $scope.maxSize = 5;
    $scope.itemsPerPage = 5;

    if ($routeParams.page && $routeParams.page>0 ) {
        $scope.currentPage = $routeParams.page;
    }

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
        $location.path('/ads/page='+$scope.currentPage);
    };

    /*mainData.getAllAds($scope.itemsPerPage, $scope.currentPage, function(resp) {
        $scope.data = resp;
        $scope.totalItems = $scope.data.numItems;
    });

    mainData.getAllTowns(function(resp){
        $scope.towns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.categories=resp;
    });*/

    var currentCategorySelected = 'all';
    var currentTownSelected = 'all';

    $scope.categoryClicked = function (categorySelected) {
        currentCategorySelected = categorySelected;
        filterByTownAndCategory();
    };

    $scope.townClicked = function (townSelected) {
        currentTownSelected = townSelected;
        filterByTownAndCategory();
    };

    function filterByTownAndCategory () {
        var categoryFilterId = currentCategorySelected == 'all' ? '' : currentCategorySelected;
        var townFilterId = currentTownSelected == 'all' ? '' : currentTownSelected;
        mainData.getAdsFilter(townFilterId, categoryFilterId, function(resp) {
            $scope.data = resp;
            $scope.totalItems = $scope.data.numItems;
        });
    }

    $scope.getCategoryClass = function (categoryId) {
        return categoryId === currentCategorySelected ? 'clickForm' : '';
    };
    $scope.getTownClass = function (townId) {
        return townId === currentTownSelected ? 'clickForm' : '';
    };
});
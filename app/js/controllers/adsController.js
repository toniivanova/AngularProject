softUni.controller('AdsController', function ($scope,mainData, $location, $routeParams) {
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
        $location.path('/ads/page='+pageNo);
    };

    $scope.currentPage = 1;
    $scope.totalItems = 99999999; // will be updated on ads load but of not set will cause setPage to 1
    $scope.maxSize = 5; // number of pages in pagination control
    $scope.itemsPerPage = 5;

    if ($routeParams.page && $routeParams.page>0 ) {
        $scope.currentPage = $routeParams.page;
    }

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
        $location.path('/ads/page='+$scope.currentPage);
    };

    mainData.getAllAds($scope.itemsPerPage, $scope.currentPage, function(resp) {
        $scope.data = resp;
        $scope.totalItems = $scope.data.numItems;
    });

    mainData.getAllTowns(function(resp){
        $scope.towns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.categories=resp;
    });
});
'use strict';
softUni.controller('Secure', function ($scope, GetAds, logoutQuery, $location) {

    if (!localStorage.username || !localStorage.token) {
        $location.path('/');
    }

    $scope.itemClicked = function (index) {
        $scope.selectedIndex = index;
    };
    $scope.categoryClicked = function ($index) {
        $scope.selectedIndexCategory = $index;
    };
    $scope.changeView = changeView;
    function changeView(view) {
        $location.path(view);
    }

    $scope.choise = {};
    GetAds.getCategories(function (resp) {
        $scope.categories = resp;
    });
    GetAds.getAllAds(function (resp) {
        $scope.ads = resp.ads;
    });
    GetAds.getTowns(function (resp) {
        $scope.towns = resp;
    })

    $scope.getFilterByTownID = function (name) {
        if (name) {
            $scope.choise.townId = name;
        }
        else {
            delete($scope.choise.townId);
        }
        console.log($scope.choise);
    }
    $scope.getFilterByCatID = function (name) {
        if (name) {
            $scope.choise.categoryId = name;
        }
        else {
            delete($scope.choise.categoryId);
        }
        console.log($scope.choise);
    }
    $scope.choiseTypeAd = {};
    function choiseType(id) {
        if (id == 'all') {
            $scope.choiseTypeAd = {};
            return;
        }
        $scope.choiseTypeAd.status = id;
        console.log($scope.choiseTypeAd);
    }
    $scope.choiseType = choiseType;

    $scope.deleteAdv = deleteAdv;
    function deleteAdv(id) {
        GetAds.deleteAd(id);
        $location.path('/user');
    }

});


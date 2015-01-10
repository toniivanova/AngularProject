softUni.controller('editProfileController', ['$rootScope', '$scope', '$location', '$localStorage','growl', 'mainData',
    function($rootScope, $scope, $location, $localStorage, growl, mainData) {

        mainData.getAllTowns(function(resp){
            $scope.towns=resp;
        });
    }])
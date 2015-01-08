softUni.controller('editProfileController', ['$rootScope', '$scope', '$location', '$localStorage', 'reglogData', 'growl', 'mainData',
    function($rootScope, $scope, $location, $localStorage, reglogData, growl, mainData) {

        mainData.getAllTowns(function(resp){
            $scope.towns=resp;
        });
    }])
softUni.controller('editProfileController', ['$rootScope', '$scope', '$location', '$localStorage','growl', 'filterService',
    function($rootScope, $scope, $location, $localStorage, growl, filterService) {

        filterService.getTowns(function(resp) {
                $scope.towns = resp;
            },
            function(error){
                growl.error(error.error_description);
            });
    }])
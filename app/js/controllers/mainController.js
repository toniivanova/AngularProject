softUni.controller('SoftUniController', function ($scope, $location, $routeParams, mainData) {
    mainData.getAllTowns(function(resp){
        $scope.towns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.categories=resp;
    });

});


/*softUni.controller('Login', function ($scope, $location) {
    $scope.title='Login page';

    $scope.credentials={username:'', password:''}

    $scope.login= function () {
        console.log($scope.credentials.username);
    };
});

softUni.controller('UserPublishNewAdController',
    function ($scope, $rootScope, $location, townsService, categoriesService,
              userService, notifyService) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];*/
            //if (file.type.match(/image\/.*/)) {
                /*var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.publishAd = function(adData) {
            userService.createNewAd(adData,
                function success() {
                    notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Publish ad failed", err);
                }
            );
        };
    }
);*/

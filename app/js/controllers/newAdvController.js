softUni.controller('newAdvController', ['$rootScope', '$scope', '$location', '$localStorage', 'reglogData', 'growl', 'filterService', 'GetAds',
    function($rootScope, $scope, $location, $localStorage, reglogData, growl, filterService, GetAds) {


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

    //$scope.id = $routeParams.id;





    $scope.createAdv = function (newAd) {
        console.log(newAd);
        if (!newAd || !newAd.title || !newAd.text) {
            growl.error('Title and text are required!');
            return;
        }
        GetAds.createAd(newAd);
    };

    $scope.changeView = changeView;
    function changeView(view) {
        $location.path(view);
    }
    function linkClicked(index) {
        $scope.link = index;
        localStorage.link = index;
    }
    $scope.linkClicked = linkClicked;

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#previewImg').attr('src', e.target.result);
                $scope.newAd.imageDataUrl = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
            var filePath = $('#imgInp').val();
            $('#showPath').val(filePath);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
}]);
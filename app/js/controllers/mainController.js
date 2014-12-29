softUni.controller('SoftUniController', function ($scope,mainData) {
    $scope.currentPage=1;
    $scope.itemsPerPage=2;

    mainData.getAllAds(function(resp){
        $scope.data=resp;
        $scope.ads=$scope.data.slice(0, $scope.itemsPerPage);
        $scope.totalItems=$scope.data.length;

    });
    mainData.getAllTowns(function(resp){
        $scope.towns=resp;
    });
    mainData.getAllCategories(function(resp){
        $scope.categories=resp;
    });

    $scope.pageChanged = function(currentPage){
    var start = (currentPage-1)*$scope.itemsPerPage;
    var end = start+$scope.itemsPerPage;
    $scope.ads=$scope.data.slice(start,end);
};

    /*function TodoController($scope) {
        $scope.filteredTodos = []
            ,$scope.currentPage = 1
            ,$scope.numPerPage = 10
            ,$scope.maxSize = 5;

        $scope.makeTodos = function() {
            $scope.todos = [];
            for (i=1;i<=1000;i++) {
                $scope.todos.push({ text:'todo '+i, done:false});
            }
        };
        $scope.makeTodos();

        $scope.numPages = function () {
            return Math.ceil($scope.todos.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredTodos = $scope.todos.slice(begin, end);
        });

    }*/
});
var softUni=angular.module('softUniModule',['ngRoute','ui.bootstrap'])
.config(function($routeProvider){
        $routeProvider.when('/register',{
            templateUrl:'templates/register.html'
        });
        $routeProvider.when('/ads',{
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.when('/login',{
            templateUrl:'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/newAd',{
            templateUrl:'templates/newAd.html'
            //controller: 'UserPublishNewAdController'
        });
        $routeProvider.when('/logout',{
            templateUrl:'templates/all-ads.html'
        });
        $routeProvider.otherwise({redirectTo:'/ads'});
    });



/*var app=angular.module('app',[])
    .factory('pagination', function ($sce) {
        var currentPage = 0;
        var itemPerPage = 12;
        var products = [];

        return {
            setProducts: function (newProducts) {
                products = newProducts;
            },
            getPageProducts: function (num) {
                var num = angular.isUndefined(num) ? 0 : num;
                var first = itemsPerPage * num;
                var last = first + itemPerPage;
                currentPage = num;
                last = last > products.length ? (products.length - 1) : last;
                return products.slice(first, last);
            },
            getTotalPagesNum: function () {
                return Math.ceil(products.length / itemPerPage);
            },
            getPaginationList: function () {
                var pagesNum = this.getTotalPagesNum();
                var paginationList = [];
                paginationList.push({
                    name: $sce.trustAsHtml('&laquo;'),
                    link: 'prev'
                });
                for (var i = 0; i < pagesNum; i++) {
                    var name = i + 1;
                    paginationList.push({
                        name: $sce.trustAsHtml(String(name)),
                        link: i
                    });
                };

                paginationList.push({
                    name: $sce.trustAsHtml('&raquo;'),
                    link: 'next'
                });
                if (pagesNum > 1) {
                    return paginationList;
                } else {
                    return false;
                }
            },
            getCurrentPageNum: function () {
                return currentPage;
            },

            getPrevPageProducts: function () {
                var prevPageNum = currentPage - 1;
                if (prevPageNum < 0)prevPageNum = 0;
                return this.getPageProducts(prevPageNum);
            },

            getNextPageProducts: function () {
                var nextPageNum = currentPage + 1;
                var pagesNum = this.getTotalPagesNum();
                if (nextPageNum >= pagesNum)nextPageNum = pagesNum - 1;
                return this.getPageProducts(nextPageNum);
            }
        }
    })
    .controller('mainCtrl', function ($scope, $http, pagination) {
        $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/ads?PageSize=10&Startpage=1'})
            .success(function(data,status,headers,config){
                $scope.menuObj=data;
                pagination.setProducts(data.products);
                $scope.products=pagination.getPageProducts();
                $scope.paginationList=pagination.getPaginationList();
            });
        $scope.showPage=function(page){
            if(page=='prev'){
                $scope.products=pagination.getPrevPageProducts();
            }else if(page=='next'){
                $scope.products=pagination.getNextPageProducts();
            }else{
                $scope.products=pagination.getPageProducts(page);
            }
        }
        $scope.getCurrentPageNum= function () {
            return pagination.getCurrentPageNum();
        }
    })*/
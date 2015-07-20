'use strict';

angular.module('myApp', ['ngRoute', 'cat', 'charts', 'fotorama'])
.config(Config);


function Config($routeProvider) {
   

    $routeProvider
        .when('/cats', {
            templateUrl: 'components/cat/cats.html',
            controller: 'catController'
        })
        .when('/cat', {
            templateUrl: 'components/cat/addCat/addCat.html',
            controller: 'addCatController'
        })        
        .when("/charts",
            {               
                templateUrl: "components/charts/charts.html",
                controller: "chartsController"
            })
        .when("/fotorama",
            {               
                templateUrl: "components/fotorama/fotorama.html",
                controller: "fotoramaController"
            })
        .otherwise({
            redirectTo: '/cats'
        });

       


};


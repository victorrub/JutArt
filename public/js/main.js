(function () {
    'use strict';

    angular
        .module('jutart', ['mainDirectives', 'ngRoute', 'ngResource', 'ui.bootstrap'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })

            .when('/Portifolio', {
                templateUrl: 'views/portifolio.html',
                controller: 'portController'
            })

            .when('/Videos', {
                templateUrl: 'views/videos.html',
                controller: 'videosController'
            })

            .when('/Bio', {
                templateUrl: 'views/biografia.html'
            })

            .when('/Contato', {
                templateUrl: 'views/contato.html'
            })

            .otherwise({ redirectTo: '/'});
    }
})();

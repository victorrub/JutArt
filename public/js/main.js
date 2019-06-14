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

            .otherwise({ redirectTo: '/'});
    }
})();

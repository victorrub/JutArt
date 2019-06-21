(function () {
    'use strict';
    
    angular
        .module('mainDirectives', [])
        .directive('menuStructure', menuStructure)
        .directive('footerStructure', footerStructure)
        .directive('carousel', carousel)
        .directive('tooltip', tooltip)

    function menuStructure(){
        return {
            restrict: 'E',
            templateUrl: 'js/directives/templates/menu-structure.html'
        }
    }

    function footerStructure(){
        return {
            restrict: 'E',
            templateUrl: 'js/directives/templates/footer-structure.html'
        }
    }

    function carousel(){
        return{
            link: function(scope, element, attrs){
                $('.carousel').carousel({
                    interval: 4000,
                    pause: false
                })
            }
        }
    }

    function tooltip(){
        return{
            link: function(scope, element, attrs){
                $('[data-toggle="tooltip"]').tooltip()
            }
        }
    }


})();
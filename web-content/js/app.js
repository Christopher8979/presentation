angular.module('presentation-app', ['presentation'])
    .controller('mainCtrl', ['$scope', function(scope) {
        scope.test = 'Initial mark up with angular'
    }]);

angular.module('presentation', [])
    .directive('container', [function() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '../partials/container.html',
            compile: function(element, attributes) {
                return function(scope, elem, attr) {
                    scope.maxed = true;
                    scope.toggleScreen = function() {
                        scope.maxed = !scope.maxed;
                    };
                }
            }
        }
    }]);

angular.module('presentation-app', ['presentation'])
    .controller('presentation-app-ctrl', ['$scope', function(scope) {
        scope.allSlides = [
            ['../chapter1/slide1.html', '../chapter1/slide3.html', '../chapter1/slide3.html'],
            ['../chapter2/slide1.html', '../chapter2/slide3.html', '../chapter2/slide3.html']
        ]
    }]);

angular.module('presentation', [])
    .directive('container', [function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
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
    }])
    .directive('slides', [function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                config: '='
            },
            link: function(scope, elem, attr) {
                setTimeout(function() {
                    console.log(scope);
                    console.log(attr);
                }, 5000);
            }
        }
    }]);

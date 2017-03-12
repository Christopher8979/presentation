angular.module('presentation-app', ['presentation'])
    .controller('mainCtrl', ['$scope', function(scope) {
        scope.test = 'Initial mark up with angular'
    }]);

angular.module('presentation', [])
    .directive('container', [function() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl:'../partials/container.html',
            compile: function(element, attr) {
                element.addClass('maxed-out');
                return function() {}
            }
        }
    }]);

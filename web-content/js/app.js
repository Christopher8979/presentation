angular.module('presentation-app', ['presentation'])
    .controller('presentation-app-ctrl', ['$scope', function(scope) {
        scope.allSlides = [
            ['../chapter1/slide1.html', '../chapter1/slide2.html', '../chapter1/slide3.html'],
            ['../chapter2/slide1.html', '../chapter2/slide2.html', '../chapter2/slide3.html'],
            ['../chapter3/slide1.html', '../chapter3/slide2.html', '../chapter3/slide3.html'],
            ['../chapter4/slide1.html', '../chapter4/slide2.html', '../chapter4/slide3.html'],
            ['../chapter5/slide1.html', '../chapter5/slide2.html', '../chapter5/slide3.html']
        ]
    }]);

angular.module('presentation', [])
    .directive('presentation', [function() {
        return {
            restrict: 'EA',
            scope: {
                slides: '='
            },
            replace: true,
            templateUrl: '../partials/container.html',
            controller: function($scope) {
                var presentation = this;
                presentation.slides = angular.copy($scope.slides);
                presentation.maxed = true;
                presentation.toggleScreen = function() {
                    presentation.maxed = !presentation.maxed;
                };
                presentation.slidesRedefined = [];

                presentation.chapterNo = 0;
                presentation.slideNo = 0;
                presentation.buttonStatus = {
                    leftDisabled: false,
                    upDisabled: false,
                    downDisabled: false,
                    rightDisabled: false
                };

                presentation.buttonStatusDefault = angular.copy(presentation.buttonStatus);


                // Method to change slides into desired format
                presentation.transformInput = function() {
                    angular.forEach(presentation.slides, function(chapter, index) {
                        presentation.slidesRedefined.push({
                            'chapter': chapter,
                            'length': chapter.length
                        });
                    });
                    presentation.slides = angular.copy(presentation.slidesRedefined);
                }


                presentation.checkButtonStatus = function() {
                    presentation.buttonStatus = angular.copy(presentation.buttonStatusDefault);

                    if (0 === presentation.chapterNo) {
                        presentation.buttonStatus.leftDisabled = true;
                    }
                    if (0 === presentation.slideNo) {
                        presentation.buttonStatus.upDisabled = true;
                    }
                    if ((presentation.slides[presentation.chapterNo].length - 1) === presentation.slideNo) {
                        presentation.buttonStatus.downDisabled = true;
                    }
                    if ((presentation.slides.length - 1) === presentation.chapterNo) {
                        presentation.buttonStatus.rightDisabled = true;
                    }
                };

                presentation.checkButtonStatus();

                presentation.prevChapter = function() {
                    presentation.chapterNo--;
                };
                presentation.prevSlide = function() {
                    presentation.slideNo--;
                };
                presentation.nextSlide = function() {
                    presentation.slideNo++;
                };
                presentation.nextChapter = function() {
                    presentation.chapterNo++;
                };

            },
            controllerAs: 'container',
            compile: function(element, attributes) {
                return function(scope, elem, attr) {}
            }
        }
    }]);

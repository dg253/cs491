(function () {
    angular
        .module('savery')
        .directive('progressCircle', progressCircle);

    function progressCircle () {
        var directive = {
            restrict: 'A',
            replace: true,
            link: link
        };

        function link ($scope, iElm, iAttrs) {
            var startColor = iAttrs.startColor || '#FC5B3F';
            var endColor = iAttrs.endColor || '#C144D8';

            var beginAt = 0;
            var stopAt = iAttrs.stopat;

            var element = iElm[0];
            var circle = new ProgressBar.Circle(element, {
                color: startColor,
                trailColor: '#eee',
                trailWidth: 1,
                duration: 3000,
                easing: 'bounce',
                strokeWidth: 8,

                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    if (!beginAt) {
                        circle.setText('0%');
                    }

                    if (beginAt++ < stopAt) {
                        circle.setText(beginAt + '%');
                    }
                }
            });

            circle.animate((stopAt / 100), {
                from: {color: startColor},
                to: {color: endColor}
            });
        }

        return directive;
    }
}());
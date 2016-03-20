(function () {
    angular
        .module('savery')
        .directive(chart);

    function chart () {
        var directive = {
            replace: true,
            link: link,
            scope: {

            }
        };

        function link ($scope, iElm, iAttrs) {

        }
    }
}());
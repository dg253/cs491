(function () {
    angular
        .module('savery')
        .directive('svChart', chart);

    function chart () {
        var directive = {
            restrict: 'A',
            replace: true,
            link: link
        };

        function link ($scope, iElm, iAttrs) {
            //Data and options from the controller's $scope
            var chartData = $scope.chartData;
            var chartOptions = $scope.options;

            //Get the element
            var el = iElm[0];
            //If it's not a canvas element, throw error
            if (!el.getContext) {
                throw new Error('Can\'t create chart. Directive element must be a canvas element');
            }

            //Create new chart
            var ctx = el.getContext('2d');
            var newChart = new Chart(ctx)[iAttrs.type](chartData, chartOptions);
        }

        return directive;
    }
}());
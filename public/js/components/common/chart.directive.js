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
            //Type of chart to create
            var chartType = iAttrs.type;

            //Data and options from the controller's $scope
            var data = $scope[chartType].data;
            var options = $scope[chartType].options;

            //Get the element
            var el = iElm[0];
            //If it's not a canvas element, throw error
            if (!el.getContext) {
                throw new Error('Can\'t create chart. Directive element must be a canvas element');
            }

            //Create new chart
            var ctx = el.getContext('2d');
            var newChart = new Chart(ctx)[iAttrs.type](data, options);
        }

        return directive;
    }
}());
(function () {
    angular
        .module('savery')
        .controller('expensesCtrl', expensesCtrl);

    expensesCtrl.$inject = ['$scope'];

    function expensesCtrl ($scope) {
        $scope.sum = 0;

        $scope.labels = ['Bills', 'Clothes', 'Transportation', 'Entertainment', 'Gas', 'Other'];
        $scope.data = [39, 14, 13, 12, 6, 16];
        $scope.colors = Chart.defaults.global.colours;
        console.log($scope.colors);

        $scope.data.forEach(function (num, index) {
            $scope.sum += num;
        });

        $scope.chartOptions = {
            percentageInnerCutout : 70
        };

        var startColor = '#FC5B3F';
        var endColor = '#6FD57F';

        var element = document.getElementById('example-animation-container');
        var circle = new ProgressBar.Circle(element, {
            color: startColor,
            trailColor: '#eee',
            trailWidth: 1,
            duration: 2000,
            easing: 'bounce',
            strokeWidth: 5,

            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
            }
        });

        circle.animate(0.6, {
            from: {color: startColor},
            to: {color: endColor}
        });
    }
}());
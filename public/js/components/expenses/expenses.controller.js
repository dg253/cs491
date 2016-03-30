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
    }
}());
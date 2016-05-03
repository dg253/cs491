(function () {
    angular
        .module('savery')
        .controller('savingsCtrl', savingsCtrl);

    savingsCtrl.$inject = ['$scope'];

    function savingsCtrl ($scope) {
        $scope.sum = 0;

        $scope.labels = ['Condo', 'Motorcycle', 'PlayStation 4', 'Retirement', 'Vacation', 'Other'];
        $scope.data = [775, 293, 230, 335, 104, 356];
        $scope.colors = Chart.defaults.global.colours;

        $scope.data.forEach(function (num, index) {
            $scope.sum += num;
        });

        console.log($scope.labels);

        $scope.chartOptions = {
            percentageInnerCutout : 70
        };
    }
}());
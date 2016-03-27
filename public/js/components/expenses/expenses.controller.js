(function () {
    angular
        .module('savery')
        .controller('expensesCtrl', expensesCtrl);

    expensesCtrl.$inject = ['$scope'];

    function expensesCtrl ($scope) {
        $scope.labels = ['Bills', 'Clothes', 'Transportation', 'Entertainment', 'Gas', 'Other'];
        $scope.data = [39, 14, 13, 12, 6, 16];
        $scope.showLegend = true;
    }
}());
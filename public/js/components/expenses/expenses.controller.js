(function () {
    angular
        .module('savery')
        .controller('expensesCtrl', expenses);

    expenses.$inject = ['$scope'];

    function expenses ($scope) {

    }
}());
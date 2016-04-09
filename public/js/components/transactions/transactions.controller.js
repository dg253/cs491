(function () {
    angular
        .module('savery')
        .controller('transactionsCtrl', transactionsCtrl);

    transactionsCtrl.$inject = ['$scope'];

    function transactionsCtrl ($scope) {
        $scope.sum = 0;

        $scope.labels = ['Bills', 'Clothes', 'Transportation', 'Entertainment', 'Gas', 'Other'];
        $scope.data = [39, 14, 13, 12, 6, 16];
        $scope.colors = Chart.defaults.global.colours;

        $scope.data.forEach(function (num, index) {
            $scope.sum += num;
        });

        $scope.chartOptions = {
            percentageInnerCutout : 70
        };

        $scope.bills = [
            {
                name: { name: 'Spotify Premium', company: 'Spotify USA' },
                dueDate: { date: 'Mar 14, 2016', status: 'Overdue' },
                freq: { freq: 'Monthly', startedOn: '1.14.14' },
                amount: { amount: '12.95', status: 'Delayed' }
            },
            {
                name: { name: 'Xbox Live', company: 'Microsoft' },
                dueDate: { date: 'Mar 17, 2016', status: 'Overdue' },
                freq: { freq: 'Every 3 Months', startedOn: '4.17.12' },
                amount: { amount: '29.95', status: 'Delayed' }
            },
            {
                name: { name: 'Amazon Prime', company: 'Amazon.com' },
                dueDate: { date: 'Apr 2, 2016', status: 'in 10 Days' },
                freq: { freq: 'Annual', startedOn: '4.2.15' },
                amount: { amount: '98.95', status: 'Pending' }
            },
            {
                name: { name: 'Netflix Premium', company: 'Netflix Inc' },
                dueDate: { date: 'Apr 8, 2016', status: 'in 16 Days' },
                freq: { freq: 'Monthly', startedOn: '10.8.13' },
                amount: { amount: '11.99', status: 'Pending' }
            },
            {
                name: { name: 'Internet and Cable', company: 'Optimum Online' },
                dueDate: { date: 'Apr 12, 2016', status: 'in 20 Days' },
                freq: { freq: 'Every 3 Months', startedOn: '2.12.15' },
                amount: { amount: '74.98', status: 'Pending' }
            },
            {
                name: { name: 'Cell Phone', company: 'Verizon' },
                dueDate: { date: 'Apr 19, 2016', status: 'in 27 Days' },
                freq: { freq: 'Monthly', startedOn: '4.19.12' },
                amount: { amount: '44.95', status: 'Pending' }
            },
            {
                name: { name: 'Rent', company: 'Rockwell Realty' },
                dueDate: { date: 'Mar 14, 2016', status: 'in 5 Weeks' },
                freq: { freq: 'Monthly', startedOn: '2.1.15' },
                amount: { amount: '1,750', status: 'Pending' }
            }
        ];

        $scope.deleteBill = deleteBill;

        function deleteBill (index) {
            swal({
                    title: "Are you sure?",
                    text: "You cannot recover this bill",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function () {
                    $scope.$apply(function () {
                        $scope.bills.splice(index, 1);
                    });

                    swal("Deleted!", "Bill deleted.", "success");
                });
        }
    }
}());
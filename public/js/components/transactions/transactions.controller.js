(function () {
    angular
        .module('savery')
        .controller('transactionsCtrl', transactionsCtrl);

    transactionsCtrl.$inject = ['$scope'];

    function transactionsCtrl ($scope) {

        $scope.transactions = [
            {
                name: { name: 'Lunch', company: 'Chipotle' },
                dateCreated: 'Mar 22, 2016',
                purchaseLink: 'Edison, NJ',
                amount: '11.86',
                expense: true
            },
            {
                name: { name: 'ATM Deposit', company: 'Bank of America' },
                dateCreated: 'Mar 20, 2016',
                purchaseLink: 'Bridgewater, NJ',
                amount: '199.95',
                expense: false
            },
            {
                name: { name: 'Cell Phone Bill', company: 'Verizon' },
                dateCreated: 'Mar 19, 2016',
                purchaseLink: 'Online',
                amount: '44.95',
                expense: true
            },
            {
                name: { name: 'Food and Drinks', company: 'Minetta Tavern' },
                dateCreated: 'Mar 18, 2016',
                purchaseLink: 'New York, NY',
                amount: '127.43',
                expense: true
            },
            {
                name: { name: 'Books', company: 'Barnes and Noble' },
                dateCreated: 'Mar 18, 2016',
                purchaseLink: 'Edison, NJ',
                amount: '14.95',
                expense: true
            },
            {
                name: { name: 'Gasoline', company: 'Exxon' },
                dateCreated: 'Mar 16, 2016',
                purchaseLink: 'Highland Park, NJ',
                amount: '20.00',
                expense: true
            },
            {
                name: { name: 'Internet and Cable Bill', company: 'Optimum Online' },
                dateCreated: 'Mar 12, 2016',
                purchaseLink: 'Online',
                amount: '74.98',
                expense: true
            }
        ];

        $scope.deleteTransactionItem = deleteTransactionItem;

        function deleteTransactionItem (index) {
            swal({
                    title: "Are you sure?",
                    text: "You cannot recover this transaction",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function () {
                    $scope.$apply(function () {
                        $scope.transactions.splice(index, 1);
                    });

                    swal("Deleted!", "Transaction deleted.", "success");
                });
        }
    }
}());
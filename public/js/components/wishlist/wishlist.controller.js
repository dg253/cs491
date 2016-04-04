(function () {
    angular
        .module('savery')
        .controller('wishlistCtrl', wishlist);

    wishlist.$inject = ['$scope'];

    function wishlist ($scope) {
        console.log('wishin\'');

        $scope.wishlist = [
            {
                name: { name: 'Macbook Pro', company: 'Spotify USA' },
                dateCreated: 'Mar 14, 2016',
                purchaseLink: 'Edison, NJ',
                amount: '1,499.00'
            },
            {
                name: { name: 'Nest Cam Security Camera', company: 'Microsoft' },
                dateCreated: 'Mar 5, 2016',
                purchaseLink: 'Bridgewater, NJ',
                amount: '199.95'
            },
            {
                name: { name: 'Samsung Ultra 3D Smart TV', company: 'Amazon.com' },
                dateCreated: 'Mar 2, 2016',
                purchaseLink: 'Online',
                amount: '2,259,98'
            },
            {
                name: { name: 'Tesla Model S P90D', company: 'Netflix Inc' },
                dateCreated: 'Feb 28, 2016',
                purchaseLink: 'New York, NY',
                amount: '116,000.00'
            }
        ];

        $scope.deleteWishlistItem = deleteWishlistItem;

        function deleteWishlistItem (index) {
            swal({
                    title: "Are you sure?",
                    text: "Delete this wish?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function () {
                    $scope.$apply(function () {
                        $scope.wishlist.splice(index, 1);
                    });

                    swal("Deleted!", "Wish deleted.", "success");
                });
        }
    }
}());
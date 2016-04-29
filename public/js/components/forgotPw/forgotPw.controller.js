(function () {
    angular
        .module('savery')
        .controller('forgotCtrl', forgotCtrl);

    forgotCtrl.$inject = ['$scope', '$state'];

    function forgotCtrl ($scope, $state) {
        $scope.resetPw = function () {
            swal({
                title: 'Check your email',
                text: 'Instructions on resetting your password have been sent',
                imageUrl: '/assets/img/flat-email-icon.png'
            }, function () {
                $state.go('login');
            });
        };
    }
}());
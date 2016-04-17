(function () {
    angular
        .module('savery')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$state'];

    function loginCtrl ($scope, $state) {
        $scope.login = function () {
            localStorage.loggedIn = true;
            //$state.go('overview');
            location.reload();
            console.log('logged in');
        };
    }
}());
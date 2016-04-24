(function () {
    angular
        .module('savery')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$scope', '$state'];

    function registerCtrl ($scope, $state) {
        $scope.register = function () {
            $state.go('login');
        };

        if (!localStorage.reloaded) {
            location.reload();
            localStorage.reloaded = true;
        }
    }
}());
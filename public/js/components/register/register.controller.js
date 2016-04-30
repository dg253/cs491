(function () {
    angular
        .module('savery')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$scope', '$state'];

    function registerCtrl ($scope, $state) {
        $scope.register = function ($event) {
            if ($event.keyCode === 13) {
                $state.go('login');
            }
        };

        if (!localStorage.reloaded) {
            location.reload();
            localStorage.reloaded = true;
        }
    }
}());
(function () {
    angular
        .module('savery')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['$scope', '$rootScope', '$location'];

    function navCtrl ($scope, $rootScope, $location) {
        $rootScope.loggedIn = localStorage.getItem('loggedIn');
        console.log($rootScope.loggedIn);

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            if (!$rootScope.loggedIn) {
                if (!(toState.name === 'login' || toState.name === 'register' || toState.name === 'forgotPw')) {
                    $location.path('/login');
                }
            } else {
                if (toState.name === 'login' || toState.name === 'register' || toState.name === 'forgotPw') {
                    $location.path('/');
                }
            }

            if (toState.name === 'register' && fromState.name === 'login') {
                localStorage.removeItem('reloaded');
            }
        });
    }
}());
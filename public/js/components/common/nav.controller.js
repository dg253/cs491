(function () {
    angular
        .module('savery')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['$scope', '$rootScope'];

    function navCtrl ($scope, $rootScope) {
        $rootScope.loggedIn = localStorage.getItem('loggedIn');
        console.log($rootScope.loggedIn);
    }
}());
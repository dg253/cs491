(function () {
    angular
        .module('savery')
        .controller('forgotCtrl', forgotCtrl);

    forgotCtrl.$inject = ['$scope'];

    function forgotCtrl ($scope) {
        console.log('forgot');
    }
}());
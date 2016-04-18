(function () {
    angular
        .module('savery')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$state'];

    function loginCtrl ($scope, $state) {
        $scope.login = function (e) {
            console.log(arguments);

            var working = false;
            e.preventDefault();

            if (working) return;

            working = true;

            var $this = $('.login'),
                $state1 = $this.find('button > .state');
            $this.addClass('loading');
            $state1.html('Authenticating');
            setTimeout(function() {
                $this.addClass('ok');
                $state1.html('Welcome back!');
                setTimeout(function() {
                    $this.removeClass('ok loading');
                    working = false;

                    localStorage.loggedIn = true;
                    $state.go('overview');
                    location.reload();
                }, 1500);
            }, 1500);
        };
    }
}());
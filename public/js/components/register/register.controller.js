(function () {
    angular
        .module('savery')
        .controller('registerCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$state'];

    function loginCtrl ($scope, $state) {
        $scope.register = function (e) {

            var working = false;
            e.preventDefault();

            var $this = $('.login'),
                $state1 = $this.find('button > .state');
            $this.addClass('loading');
            $state1.html('Initializing');
            setTimeout(function() {
                $this.addClass('ok');
                $state1.html('Redirecting to login');
                setTimeout(function() {
                    $this.removeClass('ok loading');
                    working = false;

                    $state.go('login');
                }, 1500);
            }, 1500);
        };
    }
}());

/*
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
}());*/

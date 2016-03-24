(function () {
    angular
        .module('savery')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/',
                templateUrl: 'js/components/overview/views/overview.html',
                controller: 'overviewCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/components/login/views/login.html'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'js/components/register/views/register.html'
            })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}());
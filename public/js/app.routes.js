(function () {
    angular
        .module('savery')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'js/components/dashboard/views/dashboard.html'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}());
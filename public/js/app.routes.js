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
            })

            .state('savings', {
                url: '/savings',
                templateUrl: 'js/components/savings/views/savings.html'
            })

            .state('expenses', {
                url: '/expenses',
                templateUrl: 'js/components/expenses/views/expenses.html'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'js/components/profile/views/profile.html'
            })

            .state('friends', {
                url: '/friends',
                templateUrl: 'js/components/friends/views/friends.html'
            })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}());
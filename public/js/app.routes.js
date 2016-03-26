(function () {
    angular
        .module('savery')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/',
                templateUrl: 'js/components/overview/overview.html',
                controller: 'overviewCtrl'
            })

            .state('expenses', {
                url: '/expenses',
                templateUrl: 'js/components/expenses/expenses.html'
            })

            .state('savings', {
                url: '/savings',
                templateUrl: 'js/components/savings/savings.html'

            })

            .state('transactions', {
                url: '/transactions',
                templateUrl: 'js/components/transactions/transactions.html'

            })

            .state('wishlist', {
                url: '/wishlist',
                templateUrl: 'js/components/wishlist/wishlist.html'

            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/components/login/login.html'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'js/components/register/register.html'
            })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}());
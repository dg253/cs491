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
                templateUrl: 'js/components/expenses/expenses.html',
                controller: 'expensesCtrl'
            })

            .state('savings', {
                url: '/savings',
                templateUrl: 'js/components/savings/savings.html'

            })

            .state('transactions', {
                url: '/transactions',
                templateUrl: 'js/components/transactions/transactions.html',
                controller: 'transactionsCtrl'
            })

            .state('wishlist', {
                url: '/wishlist',
                templateUrl: 'js/components/wishlist/wishlist.html',
                controller: 'wishlistCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/components/login/login.html'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'js/components/register/register.html'
            })

            .state('test', {
                url: '/test',
                templateUrl: 'js/components/test/test.html'
            })

        $urlRouterProvider.otherwise('/login');
        $locationProvider.html5Mode(true);
    }
}());